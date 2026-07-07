"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, ChevronUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-10 pb-6 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10 relative">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Image
              src="/logo_rhema_2.png"
              alt="Rhema Corretora de Seguros"
              width={280}
              height={100}
              className="h-24 w-auto object-contain mb-3"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm mb-4">
              Transformando proteção em propósito. Consultoria especializada em seguros com ética e direção clara.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com/rhema.corretora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/5511921081491"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:contato@rhema.com.br"
                aria-label="E-mail"
                className="p-2.5 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Serviços */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link href="/servicos/seguro-de-vida" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  Seguro de Vida
                </Link>
              </li>
              <li>
                <Link href="/servicos/seguro-saude" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  Seguro Saúde
                </Link>
              </li>
              <li>
                <Link href="/servicos/responsabilidade-civil" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  Responsabilidade Civil
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link href="/quem-somos" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">Contato e Local</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="leading-relaxed">
                Brasília - DF
                <br />
                <span className="text-primary-foreground/60">Agende uma consultoria</span>
              </li>
              <li className="pt-2 border-t border-primary-foreground/20">
                <span className="block font-medium text-white mb-1">Contato</span>
                <a href="mailto:contato@rhema.com.br" className="hover:text-white transition-colors">
                  contato@rhema.com.br
                </a>
                <br />
                <a href="https://wa.me/5511921081491" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    11 92108-1491
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-primary-foreground/20 text-sm text-primary-foreground/60 gap-3">
          <p>
            &copy; {new Date().getFullYear()} Rhema Corretora de Seguros. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/politica-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <span className="hidden md:inline-block text-primary-foreground/20">|</span>
            <p className="hidden md:block">
              Site desenvolvido por{" "}
              <span className="font-semibold text-white">Meta Consultoria</span>
            </p>
            <button
              onClick={scrollToTop}
              className="ml-2 p-2.5 bg-background text-primary rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
