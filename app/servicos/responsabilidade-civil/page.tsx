import { services } from "@/constants/services";
import ServicoDetalheTemplate from "../components/ServicoDetalheTemplate";

export const metadata = {
  title: "Seguro de Responsabilidade Civil Geral e Profissional | Rhema",
  description: "Proteja sua empresa de processos e prejuízos com terceiros. Custos de defesa e blindagem jurídica.",
};

export default function Page() {
  const service = services.find((s) => s.slug === "responsabilidade-civil")!;
  return <ServicoDetalheTemplate service={service} />;
}
