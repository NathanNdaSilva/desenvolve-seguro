'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 md:px-8">
        <div className="hero-grid">
          
          {/* Lado Esquerdo - Conteúdo */}
          <div className="hero-content">
            <div className="hero-badge">✧ Consultoria exclusiva</div>
            
            <h1 className="hero-title">
              Seguro não é sobre<br />
              prever o futuro. <span className="highlight">É sobre<br />estar preparado.</span>
            </h1>
            
            <p className="hero-subtitle">
              Proteção em vida, blindagem patrimonial e planejamento sucessório 
              com estratégias personalizadas para famílias e empresários.
            </p>
            
            <div className="hero-cta-group">
              <Link href="/cotacao" className="btn-hero-primary">
                Solicitar Consultoria Estratégica
              </Link>
              <Link href="/servicos" className="btn-hero-secondary">
                Conhecer serviços
              </Link>
            </div>

            {/* STATS REMOVIDOS */}
          </div>

          {/* Lado Direito - Mockup com Escudinho */}
          <div className="hero-image-wrapper">
            <div className="mockup-card">
              <div className="mockup-icon">🛡️</div>
              <h3 className="mockup-title">Rhema Corretora</h3>
              <p className="mockup-description">Especialistas em seguros de alto padrão</p>
              <div className="mockup-tags">
                <span>Vida</span>
                <span>Saúde</span>
                <span>Responsabilidade Civil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
