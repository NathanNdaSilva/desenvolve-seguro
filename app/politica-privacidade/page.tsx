import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Users, Eye, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Rhema Corretora de Seguros",
  description:
    "Política de Privacidade da Rhema. Saiba como protegemos seus dados pessoais em conformidade com a LGPD.",
  alternates: {
    canonical: "/politica-privacidade",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Botão Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Última atualização: Julho de 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A sua privacidade e a proteção dos seus dados pessoais são prioridades absolutas para nós. 
            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos 
            e protegemos as suas informações.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-10">
          {/* 1. QUEM SOMOS */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              1. Quem Somos e Papel no Tratamento
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A Rhema Corretora de Seguros é uma empresa especializada em consultoria em seguros, 
              atuando com excelência na proteção em vida, blindagem patrimonial e planejamento sucessório. 
              Para os fins desta política, atuamos como Controladora dos seus dados pessoais na fase de 
              captação e análise inicial, e como operadora em conjunto com as Seguradoras Parceiras no 
              momento da emissão e gestão das apólices.
            </p>
          </section>

          {/* 2. DADOS COLETADOS */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              2. Dados Pessoais Coletados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O mercado de seguros exige uma análise rigorosa de riscos. Por isso, coletamos diferentes 
              categorias de dados:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">A) Dados Cadastrais Gerais</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                  <li>Nome completo, data de nascimento e estado civil</li>
                  <li>Documentos de identificação (CPF, RG)</li>
                  <li>Informações de contato (endereço, e-mail e telefone)</li>
                  <li>Informações de login para acesso à Área do Cliente</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">B) Dados Específicos por Ramo de Seguro</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                  <li>
                    <span className="font-medium text-foreground">Seguro de Vida:</span> Histórico médico familiar, 
                    hábitos de vida, profissão, renda e dados dos beneficiários
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Seguro Saúde:</span> Histórico de saúde, 
                    condições médicas preexistentes, exames e dados de dependentes
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Responsabilidade Civil:</span> Dados profissionais, 
                    histórico de sinistros e processos
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold">⚠️</span>
                  <span>
                    <span className="font-medium text-foreground">Dados Sensíveis:</span> O tratamento de dados de saúde 
                    é indispensável para a análise de risco. Garantimos que tais dados nunca serão utilizados para 
                    finalidades discriminatórias ou comerciais alheias ao escopo da contratação do seu seguro.
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* 3. FINALIDADES */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              3. Finalidades do Tratamento dos Dados
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-medium text-foreground">Elaboração de Cotações:</span> Analisar o perfil do usuário para buscar as melhores ofertas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-medium text-foreground">Execução de Contrato:</span> Viabilizar a emissão da apólice e gestão contínua do seguro</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-medium text-foreground">Gestão de Sinistros:</span> Processamento e pagamento de indenizações</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-medium text-foreground">Suporte e Atendimento:</span> Responder a dúvidas e solicitações</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-medium text-foreground">Segurança e Prevenção à Fraude:</span> Validar identidades e monitorar acessos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-medium text-foreground">Cumprimento Legal:</span> Atender obrigações regulatórias do setor de seguros</span>
              </li>
            </ul>
          </section>

          {/* 4. COMPARTILHAMENTO */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              4. Compartilhamento de Dados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Seus dados poderão ser compartilhados com:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
              <li><span className="font-medium text-foreground">Seguradoras Parceiras:</span> Para emissão das apólices</li>
              <li><span className="font-medium text-foreground">Prestadores de Serviços Tecnológicos:</span> Hospedagem, CRM, pagamentos</li>
              <li><span className="font-medium text-foreground">Prestadores Especializados:</span> Peritos médicos e auditores</li>
              <li><span className="font-medium text-foreground">Autoridades Públicas:</span> Quando houver requisição legal</li>
            </ul>
          </section>

          {/* 5. SEGURANÇA */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              5. Segurança dos Dados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Adotamos medidas técnicas e organizacionais avançadas para proteger seus dados:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
              <li>Criptografia SSL/TLS em todas as comunicações</li>
              <li>Criptografia e hashing para armazenamento de senhas</li>
              <li>Controle restrito de acesso aos dados</li>
              <li>Monitoramento constante dos servidores</li>
            </ul>
          </section>

          {/* 6. RETENÇÃO */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              6. Retenção e Exclusão dos Dados
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Os dados pessoais serão conservados apenas pelo período necessário para cumprir as finalidades 
              para as quais foram coletados. Cotações não finalizadas serão mantidas por até 12 meses para 
              acompanhamento comercial. Dados de apólices vigentes serão mantidos durante toda a relação 
              contratual e pelos prazos legais subsequentes.
            </p>
          </section>

          {/* 7. DIREITOS */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              7. Direitos dos Titulares dos Dados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A qualquer momento, você poderá solicitar:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
              <li>Confirmação e acesso aos seus dados</li>
              <li>Retificação de dados incompletos ou desatualizados</li>
              <li>Eliminação de dados desnecessários</li>
              <li>Portabilidade dos seus dados</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          {/* 8. CONTATO DO DPO */}
          <section className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              📬 Como exercer seus direitos?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para exercer qualquer um dos seus direitos ou tirar dúvidas sobre o tratamento dos seus dados, 
              entre em contato com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO):
            </p>
            <div className="bg-background rounded-xl p-4 border border-border space-y-2">
              <p className="text-foreground">
                <span className="font-medium">E-mail:</span>{""}
                <a href="mailto:privacidade@rhema.com.br" className="text-primary hover:underline ml-1">
                  privacidade@rhema.com.br
                </a>
              </p>
              <p className="text-foreground">
                <span className="font-medium">Canal de Atendimento:</span>{""}
                <a href="/contato" className="text-primary hover:underline ml-1">
                  Página de Contato
                </a>
              </p>
            </div>
          </section>

          {/* 9. COOKIES */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              8. Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies para otimizar sua experiência de navegação. Você pode configurar ou 
              bloquear os cookies nas opções do seu navegador a qualquer momento.
            </p>
          </section>

          {/* 10. ALTERAÇÕES */}
          <section className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              9. Alterações nesta Política de Privacidade
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. 
              Recomendamos que consulte esta página periodicamente para se manter informado.
            </p>
          </section>

          {/* Footer da página */}
          <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Rhema Corretora de Seguros. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
