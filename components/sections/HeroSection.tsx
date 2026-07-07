import { ArrowDown } from "lucide-react";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showArrow?: boolean;
  videoSrc?: string;
}

export function HeroSection({
  title,
  subtitle,
  showArrow = false,
  videoSrc,
}: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
      <BackgroundVideo src={videoSrc} opacity="opacity-80" />

      {/* Conteúdo com texto escuro */}
      <div className="z-10 text-center space-y-4 px-4 relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] drop-shadow-sm">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-[#1A1A1A]/80 font-medium max-w-2xl mx-auto drop-shadow-sm">
          {subtitle}
        </p>
      </div>

      {showArrow && (
        <div className="absolute bottom-10 z-10 animate-bounce text-[#1A1A1A]/60">
          <ArrowDown className="w-8 h-8" />
        </div>
      )}
    </section>
  );
}
