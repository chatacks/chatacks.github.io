import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider delayDuration={0}>
        <div className="absolute inset-0 top-0 left-0 right-0 h-25 overflow-hidden z-0">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6 min-h-screen font-sans antialiased">
          <Outlet />
        </div>
        <Navbar />
      </TooltipProvider>
    </ThemeProvider>
  );
}