import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { SANITY_TOKEN } from "@/actions/credentials"; // 🔒 Importação local e segura

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "11t8dx2l",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: SANITY_TOKEN, // Usando a constante importada do arquivo protegido
  useCdn: false,
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    await writeClient.create({
      _type: "subscriber",
      email: email,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro ao salvar newsletter no Sanity:", error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}
