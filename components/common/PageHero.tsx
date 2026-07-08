interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container mx-auto px-4 md:px-8">
        <div className="page-hero-content">
          {breadcrumb && (
            <div className="page-hero-breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span>{breadcrumb}</span>
            </div>
          )}
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
