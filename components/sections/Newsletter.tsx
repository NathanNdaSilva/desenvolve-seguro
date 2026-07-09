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

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-muted/40 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-card text-card-foreground rounded-3xl p-8 md:p-12 shadow-sm border border-border text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Inscreva-se na nossa Newsletter
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Receba conteúdos exclusivos sobre proteção patrimonial, seguros e planejamento financeiro sempre que o Rômulo publicar um novo artigo.
          </p>

          {status === "success" && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-xl p-6">
              <p className="font-medium">✅ Inscrição realizada com sucesso!</p>
              <p className="text-sm mt-1 opacity-90">Você agora faz parte da nossa lista e receberá atualizações.</p>
            </div>
          )}

          {status === "error" && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-xl p-6 mb-4">
              <p className="font-medium">❌ Ops! Algo deu errado.</p>
              <p className="text-sm mt-1 opacity-90">Tente novamente ou verifique se o e-mail digitado está correto.</p>
            </div>
          )}

          {status !== "success" && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Digite seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 rounded-full px-6 bg-background border-border focus-visible:ring-2 focus-visible:ring-primary"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 rounded-full px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all cursor-pointer flex items-center gap-2 shrink-0 font-medium"
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
