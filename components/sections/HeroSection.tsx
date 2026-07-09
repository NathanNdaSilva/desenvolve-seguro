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
    <section className="relative h-[60vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden bg-background transition-colors duration-300">
      {/* Vídeo de fundo com opacidade controlada */}
      <BackgroundVideo src={videoSrc} opacity="opacity-70" />

      {/* Overlay sutil para garantir leitura se o vídeo for muito claro/escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />

      {/* Conteúdo dinâmico e responsivo baseado no seu design system */}
      <div className="z-10 text-center space-y-4 px-4 max-w-4xl relative animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] font-roboto leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {showArrow && (
        <div className="absolute bottom-10 z-10 animate-bounce text-muted-foreground/80">
          <ArrowDown className="w-7 h-7" />
        </div>
      )}
    </section>
  );
}
