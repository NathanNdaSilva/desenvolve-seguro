"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CotacaoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    servico: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simula envio para o email
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redireciona para o WhatsApp
    const mensagem = `Olá! Meu nome é ${formData.nome}. Gostaria de fazer uma cotação para: ${formData.servico}`;
    const whatsappUrl = `https://wa.me/5511921081491?text=${encodeURIComponent(mensagem)}`;
    
    setLoading(false);
    router.push(whatsappUrl);
  };

  const servicos = [
    { value: "blindagem", label: "Blindagem Patrimonial e Planejamento Sucessório (Seguro de Vida)" },
    { value: "saude", label: "Cuidados e Saúde para Mim e Minha Família (Seguro Saúde Familiar)" },
    { value: "negocio", label: "Proteção para o meu Negócio (Responsabilidade Civil Geral)" },
  ];

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
                placeholder="55 11 92108-1491"
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
              className="w-full h-14 text-lg rounded-full shadow-md hover:shadow-lg transition-all"
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
