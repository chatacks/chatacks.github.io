import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date, locale: string = "en-US") {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateRange(range: string, locale: string = "en-US"): string {
  const formatMonth = (iso: string): string => {
    const d = new Date(iso + "-01");
    return d.toLocaleDateString(locale, { month: "short", year: "numeric", timeZone: "UTC" });
  };
  const formatDayRange = (start: string, end: string): string => {
    const s = new Date(start);
    const e = new Date(end);
    const startDay = s.getDate();
    const endDay = e.getDate();
    const startOrdinal = startDay + getOrdinal(startDay, locale);
    const endOrdinal = endDay + getOrdinal(endDay, locale);
    if (locale === "pt-BR") {
      const month = e.toLocaleDateString(locale, { month: "long", timeZone: "UTC" });
      const year = e.getFullYear();
      return `${startDay} a ${endDay} de ${month} de ${year}`;
    }
    const month = s.toLocaleDateString(locale, { month: "long", timeZone: "UTC" });
    const year = e.getFullYear();
    return `${month} ${startOrdinal} - ${endOrdinal}, ${year}`;
  };

  if (range.includes("/")) {
    const [start, end] = range.split("/");
    if (start.includes("-") && start.length > 7) {
      return formatDayRange(start, end);
    }
    return `${formatMonth(start)} - ${formatMonth(end)}`;
  }

  if (/^\d{4}-\d{2}$/.test(range)) {
    return formatMonth(range);
  }

  return range;
}

function getOrdinal(n: number, locale: string): string {
  if (locale === "pt-BR") return "";
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}