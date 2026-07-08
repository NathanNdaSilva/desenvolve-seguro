"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    // Simula envio
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A3455] mb-3">
            Inscreva-se na nossa Newsletter
          </h2>
          <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
            Receba conteúdos exclusivos sobre proteção patrimonial, seguros e planejamento financeiro.
          </p>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-green-800 font-medium">✅ Inscrição realizada com sucesso!</p>
              <p className="text-green-600/80 text-sm mt-1">Você receberá nossos conteúdos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Digite seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 rounded-full px-6 border-border focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 rounded-full px-8 bg-[#1A4E78] text-white hover:bg-[#0A3455] transition-all cursor-pointer flex items-center gap-2 shrink-0"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    Inscrever-se <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
