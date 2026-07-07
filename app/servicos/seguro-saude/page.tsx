import { services } from "@/constants/services";
import ServicoDetalheTemplate from "../components/ServicoDetalheTemplate";

export const metadata = {
  title: "Seguro Saúde Familiar e Empresarial | Rhema Seguros",
  description: "Acesse a medicina privada de excelência com o melhor custo-benefício. Proteja quem você ama.",
};

export default function Page() {
  const service = services.find((s) => s.slug === "seguro-saude")!;
  return <ServicoDetalheTemplate service={service} />;
}
