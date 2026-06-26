"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openItemId === item.id;
        
        return (
          <div 
            key={item.id} 
            className="border border-border rounded-lg bg-card overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:text-primary transition-colors focus:outline-none gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] border-t border-border/60" : "max-h-0"
              }`}
            >
              <div className="p-5 text-sm md:text-base text-muted-foreground leading-relaxed bg-muted/30">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}