import { services } from "@/constants/services";
import ServicoDetalheTemplate from "../components/ServicoDetalheTemplate";

export const metadata = {
  title: "Seguro de Vida e Planejamento Sucessório | Rhema",
  description: "Garanta a liquidez da sua família e proteja seu patrimônio. Conheça o Seguro de Vida inteligente da Rhema.",
};

export default function Page() {
  const service = services.find((s) => s.slug === "seguro-de-vida")!;
  return <ServicoDetalheTemplate service={service} />;
}
