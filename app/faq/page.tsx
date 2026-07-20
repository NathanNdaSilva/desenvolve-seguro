"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, MessageCircle, Send, Shield, Heart, Briefcase, Star, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/common/PageHero";

// Dados das perguntas e respostas
const faqData = [
  {
    id: "vida-1",
    category: "Seguro de Vida e Planejamento Familiar",
    icon: Heart,
    questions: [
      {
        q: "Qual é a real diferença entre o Seguro Saúde e o Seguro de Vida?",
        a: "Embora ambos cuidem de você, eles possuem finalidades e momentos de uso totalmente diferentes. O Seguro Saúde é focado na assistência médica e na prestação de serviços cotidianos ou emergenciais (consultas, exames, internações, cirurgias e partos). Já o Seguro de Vida é focado na proteção e reposição financeira: ele paga uma indenização em dinheiro diretamente na sua conta caso você sofra um imprevisto (como uma doença grave ou invalidez) ou falte para a sua família, garantindo a manutenção do padrão de vida."
      },
      {
        q: "Por que eu preciso de um Seguro de Vida se eu já tenho um Seguro Saúde?",
        a: "O Seguro Saúde paga o hospital e os médicos pelo seu tratamento, mas ele não paga os seus boletos de casa se você precisar se afastar do trabalho. Se você for diagnosticado com uma doença grave ou sofrer um acidente incapacitante, o Seguro de Vida injeta dinheiro líquido na sua conta para que você pague as despesas da sua família, medicamentos fora da cobertura médica ou se adapte à nova realidade, sem precisar gastar suas economias ou patrimônio."
      },
      {
        q: 'O que significa "Proteção em Vida" no Seguro de Vida?',
        a: 'Ao contrário do antigo conceito de que o seguro só serve para quando alguém falece, os seguros modernos da Rhema são amplamente utilizáveis em vida. Eles incluem coberturas para Diagnóstico de Doenças Graves (como câncer, infarto e AVC), Diárias de Internação Hospitalar e indenizações por Invalidez Permanente Total ou Parcial por Acidente. É a certeza de ter capital disponível quando você mais precisa de fôlego para se recuperar.'
      },
      {
        q: "Como o Seguro de Vida atua no Planejamento Sucessório de uma família?",
        a: "Quando uma pessoa falece, os bens e contas bancárias são bloqueados e entram em inventário. O processo de inventário custa caro (entre impostos como ITCMD, taxas de cartório e advogados) e pode levar anos. O Seguro de Vida não entra em inventário e é isento de impostos, liberando dinheiro na conta dos beneficiários em poucos dias para que a família pague os custos burocráticos e mantenha o padrão de vida sem precisar vender bens às pressas."
      }
    ]
  },
  {
    id: "saude-1",
    category: "Seguro Saúde",
    icon: Shield,
    questions: [
      {
        q: "Para que serve e qual a utilidade prática do Seguro Saúde Familiar?",
        a: "O Seguro Saúde Familiar serve para garantir que você e seus dependentes tenham acesso imediato e de alta qualidade à rede de medicina privada, sem depender do sistema público. Sua utilidade prática está em cobrir os custos de consultas de rotina, exames complexos, prontos-socorros, cirurgias e tratamentos preventivos, transformando o que seriam despesas médicas astronômicas em uma mensalidade previsível e planejada dentro do orçamento familiar."
      }
    ]
  },
  {
    id: "rc-1",
    category: "Responsabilidade Civil (Proteção Profissional e Empresarial)",
    icon: Briefcase,
    questions: [
      {
        q: "O que é o Seguro de Responsabilidade Civil Geral (RC Geral) e qual a sua utilidade?",
        a: "O RC Geral serve para proteger o patrimônio de uma empresa ou profissional contra prejuízos financeiros decorrentes de danos materiais ou corporais causados involuntariamente a terceiros (clientes, prestadores de serviço ou visitantes). Sua utilidade prática é cobrir as indenizações, os acordos e, crucialmente, todas as despesas e custos de defesa jurídica caso o segurado seja acionado na justiça."
      },
      {
        q: "Quem deve contratar o Seguro de Responsabilidade Civil Geral?",
        a: "Qualquer empresa, estabelecimento comercial, condomínio ou prestador de serviços que interaja com o público ou execute operações onde imprevistos possam acontecer. Desde uma loja onde um cliente escorrega e se machuca, até uma empresa de montagem cuja estrutura cai e danifica um veículo, o RC Geral é a garantia de que um processo judicial não vai quebrar o caixa do negócio."
      }
    ]
  },
  {
    id: "diferenciais-1",
    category: "Diferenciais Rhema & Contratação",
    icon: Star,
    questions: [
      {
        q: "Por que a parceria da Rhema com a MetLife é um diferencial importante para mim?",
        a: "A MetLife é uma das maiores, mais sólidas e mais respeitadas instituições de proteção financeira do mundo. Ter a Rhema como sua consultora em parceria com a MetLife significa que você terá acesso a produtos de altíssimo padrão internacional, contratos transparentes, taxas altamente competitivas e a certeza absoluta de que, em caso de sinistro, a indenização será paga com rapidez e sem burocracias desnecessárias."
      },
      {
        q: "Seguro é um custo ou um investimento?",
        a: "É uma ferramenta de blindagem financeira. O verdadeiro custo ocorre quando acontece um imprevisto e você precisa arcar com dezenas de milhares de reais do próprio bolso para resolver uma emergência médica, um processo judicial ou uma transição patrimonial. O seguro substitui um risco financeiro imprevisível e devastador por uma parcela pequena e controlada."
      },
      {
        q: "Como funciona o processo de contratação com a Rhema Corretora?",
        a: "Nosso processo é 100% consultivo e personalizado. Você preenche nosso formulário informando suas necessidades básicas, nós analisamos o seu perfil de risco e agendamos um atendimento para apresentar a solução exata (sua 'palavra falada/direção'). Sem pressões, sem letras miúdas: desenhamos a apólice com o propósito de cobrir as lacunas financeiras reais da sua vida ou do seu negócio."
      }
    ]
  },
  {
  id: "viagem-1",
  category: "Seguro Viagem",
  icon: Plane,
  questions: [
    {
      q: "Quanto custa o Seguro Viagem?",
      a: "O custo do Seguro Viagem depende de uma série de fatores, incluindo: destino da viagem, duração, idade do viajante, tipo de cobertura desejada e atividades planejadas. Nossa equipe faz uma análise personalizada para encontrar a melhor solução com o melhor custo-benefício para sua viagem."
    }
  ]
  }
];

// Componente Accordion
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-primary transition-colors group"
      >
        <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <span className="shrink-0 ml-4 text-muted-foreground group-hover:text-primary transition-colors">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* BANNER AZUL COM TÍTULO */}
      <PageHero 
        title="Central de Ajuda & FAQ"
        subtitle="Tire suas dúvidas sobre seguros de vida, saúde, responsabilidade civil e nossos serviços"
        breadcrumb="FAQ"
      />

      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* FAQ Accordion */}
        <div className="space-y-8 mb-16">
          {faqData.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">{category.category}</h2>
                </div>
                <div className="divide-y divide-border/30">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ainda ficou com alguma dúvida sobre o seu perfil?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Fale diretamente com um consultor especialista e tenha todas as suas perguntas respondidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511921081491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com um Consultor Especialista
            </a>
            <Link href="/cotacao">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-3 h-auto font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                Faça sua cotação
                </Button>
            </Link>
          </div>
        </div>

        {/* ⚠️ SEÇÃO "ENVIE SUA PERGUNTA" REMOVIDA ⚠️ */}
      </div>
    </div>
  );
}
