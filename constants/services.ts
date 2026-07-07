export interface Service {
  slug: string;
  title: string;
  heroSubtitle: string;
  videoSrc: string;
  imageSrc: string;
  introSubtitle: string;
  introDescription: string;
  methodology: string[];
  ctaText: string;
  seo: {
    title: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    slug: "seguro-de-vida",
    title: "Proteção em Vida & Planejamento Sucessório",
    heroSubtitle: "Garanta liquidez financeira e proteção patrimonial para sua família",
    videoSrc: "/media/video_2.mp4",
    imageSrc: "/vida.png",
    introSubtitle: "Seguro de Vida Inteligente",
    introDescription: "O patrimônio que você construiu merece ser preservado. Nossa consultoria em Seguro de Vida foca no planejamento sucessório inteligente e na proteção em vida. Garanta liquidez financeira para sua família em momentos de transição e tenha amparo financeiro imediato em casos de diagnósticos de doenças graves ou invalidez. Proteja seu amanhã, hoje.",
    methodology: [
      "Diagnóstico de Risco Personalizado: Analisamos seu momento de vida para mapear vulnerabilidades reais, evitando coberturas desnecessárias.",
      "Curadoria e Cotação Inteligente: Filtramos as melhores opções das maiores seguradoras, desenhando uma proposta com o melhor equilíbrio entre custo e benefício.",
      "Ativação Descomplicada: Cuidamos de toda a parte burocrática e legal para que sua apólice seja emitida de forma rápida, transparente e totalmente digital.",
      "Gestão Ativa e Suporte em Sinistros: Se o imprevisto acontecer, você não fala com robôs. Nossa equipe assume a linha de frente para garantir que sua indenização seja paga sem estresse."
    ],
    ctaText: "Simular Meu Seguro de Vida Inteligente",
    seo: {
      title: "Seguro de Vida e Planejamento Sucessório | Rhema",
      description: "Garanta a liquidez da sua família e proteja seu patrimônio. Conheça o Seguro de Vida inteligente da Rhema. Faça uma simulação online rápida."
    }
  },
  {
    slug: "seguro-saude",
    title: "Saúde e Bem-Estar Familiar",
    heroSubtitle: "Acesso à medicina privada de excelência com o melhor custo-benefício",
    videoSrc: "/media/video_2.mp4",
    imageSrc: "/saude.png",
    introSubtitle: "Seguro Saúde Familiar",
    introDescription: "O cuidado com quem amamos é a nossa maior prioridade. Desenhamos soluções de Seguro Saúde sob medida para a sua família, focando em redes credenciadas de excelência, agilidade no atendimento e no melhor custo-benefício. Garanta o acesso à medicina privada de ponta com a tranquilidade e a segurança que as pessoas mais importantes da sua vida merecem.",
    methodology: [
      "Diagnóstico de Risco Personalizado: Análise detalhada das necessidades de saúde da sua família e perfil de uso.",
      "Curadoria e Cotação Inteligente: Seleção da melhor rede credenciada para seu perfil, equilibrando qualidade e custo.",
      "Ativação Descomplicada: Emissão rápida com cobertura imediata e suporte para migração de planos.",
      "Gestão Ativa e Suporte em Sinistros: Acompanhamento em consultas, exames, internações e reembolsos."
    ],
    ctaText: "Falar com Consultor de Saúde",
    seo: {
      title: "Seguro Saúde Familiar e Empresarial | Rhema Seguros",
      description: "Acesse a medicina privada de excelência com o melhor custo-benefício. Proteja quem você ama com a rede credenciada Rhema. Cote agora!"
    }
  },
  {
    slug: "responsabilidade-civil",
    title: "Blindagem Jurídica e Operacional",
    heroSubtitle: "Proteja sua empresa de processos e prejuízos com terceiros",
    videoSrc: "/media/video_2.mp4",
    imageSrc: "/rc_1.png",
    introSubtitle: "Responsabilidade Civil Geral",
    introDescription: "No mundo dos negócios, imprevistos jurídicos podem custar caro. O Seguro de Responsabilidade Civil Geral da Rhema é a armadura que sua empresa precisa contra reclamações de terceiros, danos involuntários corporais ou materiais e custos de defesa jurídica. Protegemos a operação do seu negócio para que sua jornada continue sólida e sem interrupções.",
    methodology: [
      "Diagnóstico de Risco Personalizado: Mapeamento detalhado das vulnerabilidades operacionais do seu negócio.",
      "Curadoria e Cotação Inteligente: Proteção sob medida para seu segmento de atuação com coberturas específicas.",
      "Ativação Descomplicada: Emissão ágil com cobertura completa e documentação transparente.",
      "Gestão Ativa e Suporte em Sinistros: Defesa jurídica especializada e suporte em processos judiciais."
    ],
    ctaText: "Garantir Blindagem Jurídica do Meu Negócio",
    seo: {
      title: "Seguro de Responsabilidade Civil Geral e Profissional | Rhema",
      description: "Proteja sua empresa de processos e prejuízos com terceiros. Custos de defesa e blindagem jurídica com o Seguro RC Rhema. Garanta sua apólice."
    }
  }
];
