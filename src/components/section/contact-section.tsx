// import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { useLang } from "@/hooks/useLang";
import { ParticleField } from "../particle-field";


export default function ContactSection() {
  const { t } = useLang();

  return (
    <div className="border rounded-xl relative min-h-160">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{t("contact.badge")}</span>
      </div>
      <div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to top, black 40%, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black 40%, transparent)",
        }}
      >
        <ParticleField
          src="/contact-image.png"
          sampleStep={2.5}
          dotSize={1.2}
          threshold={50}
          adaptToTheme={true}
          className="h-full w-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 text-center p-10 pb-10 z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t("contact.heading")}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {t("contact.body.beforeLink")}
          <a
            href={DATA.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {t("contact.body.linkText")}
          </a>
          {t("contact.body.afterLink")}
        </p>
      </div>
    </div>
  );
}
