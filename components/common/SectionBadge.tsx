import React from "react";
import Link from "next/link";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function SectionBadge({ children, className = "", href }: SectionBadgeProps) {
  const content = (
    <div className={`flex justify-center mb-8 md:mb-10 ${className}`}>
      <div className="bg-muted text-muted-foreground px-6 py-2 rounded-full text-sm font-medium shadow-sm border border-border/50">
        {children}
      </div>
    </div>
  );

  // Só adiciona cursor-pointer e link se tiver href
  if (href) {
    return (
      <Link href={href} className="block cursor-pointer">
        {content}
      </Link>
    );
  }

  // Sem href: apenas texto, cursor normal
  return content;
}
