import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    id: "item-1",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "item-2",
    question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "item-3",
    question: "Ut enim ad minim veniam, quis nostrud exercitation?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "item-4",
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <FaqAccordion items={faqData} />

        <div className="mt-16 text-center p-8 bg-accent rounded-xl border border-border">
          <h3 className="text-lg font-semibold text-accent-foreground mb-2">
            Non found what you looking for?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full cursor-pointer px-6"
          >
            Lorem Ipsum Button
          </Button>
        </div>

      </div>
    </div>
  );
}