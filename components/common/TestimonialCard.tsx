import React from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  companyName: string;
  role: string;
  text: string;
}

export function TestimonialCard({
  companyName,
  role,
  text,
}: TestimonialCardProps) {
  return (
    <div className="bg-muted rounded-3xl p-10 relative">
      <Quote className="absolute top-10 right-10 w-12 h-12 text-primary/20" />

      {/* Nome e cargo - SEM LOGO E SEM CÍRCULO */}
      <div className="mb-8">
        <h4 className="font-bold text-lg text-foreground">{companyName}</h4>
        <p className="text-sm text-primary">{role}</p>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        &quot;{text}&quot;
      </p>
    </div>
  );
}
