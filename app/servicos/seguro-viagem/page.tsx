// app/servicos/seguro-viagem/page.tsx
import { services } from "@/constants/services";
import ServicoDetalheTemplate from "../components/ServicoDetalheTemplate";

export const metadata = {
  title: "Seguro Viagem Nacional e Internacional | Rhema",
  description: "Viaje com segurança com o Seguro Viagem Rhema. Assistência médica, bagagem, voos cancelados e muito mais. Proteja sua viagem.",
};

export default function Page() {
  const service = services.find((s) => s.slug === "seguro-viagem")!;
  return <ServicoDetalheTemplate service={service} />;
}
