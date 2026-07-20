import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const nome = body.nome;
    const email = body.email;
    const mensagem = body.mensagem;
    const telefone = body.telefone;
    const plano = body.plano;
    
    // Blindagem do Assunto: Se o front-end não mandar ou o Turbopack sumir com ele no cache, 
    // a API cria um assunto válido automaticamente em vez de retornar erro 400.
    const assunto = body.assunto || body.subject || "Nova Solicitação de Cotação - Rhema";

    // Validações básicas obrigatórias
    if (!nome || nome.length < 2) {
      return NextResponse.json({ error: 'Nome é obrigatório' }, { status: 400 });
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 });
    }

    if (!assunto || assunto.length < 3) {
      return NextResponse.json({ error: 'Assunto é obrigatório' }, { status: 400 });
    }

    // Se não houver mensagem, definimos um texto padrão para não quebrar a validação
    const mensagemFinal = mensagem && mensagem.trim().length >= 5 
      ? mensagem 
      : "O cliente solicitou uma análise consultiva para este plano e não deixou observações adicionais.";

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Mude o e-mail abaixo para o seu e-mail pessoal para testar!
    const emailDestinatario = 'rhema.corretora@gmail.com'; 

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailDestinatario,
      subject: `📩 ${assunto}`,
      html: `
        <h2 style="color: #1A4E78;">📩 Nova Solicitação de Cotação</h2>
        
        <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9; width: 30%;">Nome</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${nome}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">E-mail</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">WhatsApp</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${telefone || 'Não informado'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Foco de Proteção (Plano)</td>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: #1A4E78;"><strong>${plano || 'Geral'}</strong></td>
          </tr>
        </table>

        <h3 style="margin-top: 20px; font-family: sans-serif;">💬 Objetivo / Dúvida informada:</h3>
        <div style="background: #f5f7fa; padding: 20px; border-radius: 8px; border-left: 4px solid #1A4E78; font-family: sans-serif;">
          <p style="margin: 0; white-space: pre-wrap;">${mensagemFinal}</p>
        </div>

        <hr style="margin: 30px 0; border: 1px solid #eee;" />
        
        <p style="color: #666; font-size: 12px; font-family: sans-serif;">
          Esta mensagem foi gerada automaticamente pelo formulário da página de Cotação do site Rhema.<br/>
          <strong>Responder diretamente para:</strong> <a href="mailto:${email}" style="color: #1A4E78;">${email}</a>
        </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    );
  }
}
