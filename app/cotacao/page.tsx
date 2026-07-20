"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CotacaoPage() {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    servico: "",
    mensagem: "",
  });

  const servicos = [
  { value: "blindagem", label: "Blindagem Patrimonial e Planejamento Sucessório (Seguro de Vida)" },
  { value: "saude", label: "Cuidados e Saúde para Mim e Minha Família (Seguro Saúde Familiar)" },
  { value: "negocio", label: "Proteção para o meu Negócio (Responsabilidade Civil Geral)" },
  { value: "viagem", label: "Proteção em Viagens Nacionais e Internacionais (Seguro Viagem)" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus("idle");

    try {
      // Enviar para a API
      const response = await fetch('/api/send-cotacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.whatsapp,
          mensagem: formData.mensagem,
          plano: formData.servico,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          servico: "",
          mensagem: "",
        });
      } else {
        setSubmitStatus("error");
        console.error(data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error('Erro ao enviar:', error);
    } finally {
      setLoading(false);
    }
  };

  // Se já enviou com sucesso, mostra a mensagem de agradecimento
  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="bg-muted/30 border border-border rounded-3xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cotação enviada com sucesso!
            </h2>
            <p className="text-muted-foreground mb-6">
              Em breve entraremos em contato com uma análise personalizada para você.
            </p>
            <Button
              onClick={() => {
                setSubmitStatus("idle");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="rounded-full px-8"
            >
              Fazer nova cotação
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="bg-muted/30 border border-border rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Faça sua cotação
          </h1>
          <p className="text-muted-foreground mb-8">
            Preencha os campos abaixo e receba uma análise consultiva personalizada.
          </p>

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-800 text-sm">
                ❌ Ocorreu um erro ao enviar sua cotação. Por favor, tente novamente.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo 1: Nome */}
            <div>
              <Label htmlFor="nome" className="text-base font-medium">
                Qual seu nome completo?
              </Label>
              <Input
                id="nome"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="mt-2 h-12"
              />
            </div>

            {/* Campo 2: Email */}
            <div>
              <Label htmlFor="email" className="text-base font-medium">
                Seu melhor e-mail?
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2 h-12"
              />
            </div>

            {/* Campo 3: WhatsApp */}
            <div>
              <Label htmlFor="whatsapp" className="text-base font-medium">
                WhatsApp para contato (com DDD)
              </Label>
              <Input
                id="whatsapp"
                placeholder="+55 (00) 90000-0000"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="mt-2 h-12"
              />
            </div>

            {/* Campo 4: Serviço */}
            <div>
              <Label className="text-base font-medium block mb-3">
                Qual o foco principal da sua proteção hoje?
              </Label>
              <div className="space-y-3">
                {servicos.map((servico) => (
                  <label
                    key={servico.value}
                    className="flex items-start gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="servico"
                      value={servico.value}
                      checked={formData.servico === servico.value}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="mt-1 h-4 w-4 accent-primary shrink-0"
                      required
                    />
                    <span className="text-sm text-foreground">{servico.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Campo 5: Mensagem */}
            <div>
              <Label htmlFor="mensagem" className="text-base font-medium">
                Conte resumidamente qual o seu maior objetivo ou dúvida com essa contratação
              </Label>
              <Textarea
                id="mensagem"
                placeholder="Descreva sua situação ou dúvida..."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                rows={4}
                className="mt-2"
              />
            </div>

            {/* Botão de Envio */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Dados para Análise Consultiva"}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Ao enviar, você concorda com nossa Política de Privacidade.
              Seus dados estão seguros.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
