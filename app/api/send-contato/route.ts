// app/api/send-contato/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { nome, email, assunto, mensagem } = await request.json();

    // Validações
    if (!nome || nome.length < 2) {
      return NextResponse.json(
        { error: 'Nome é obrigatório' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    if (!mensagem || mensagem.length < 5) {
      return NextResponse.json(
        { error: 'Mensagem é obrigatória' },
        { status: 400 }
      );
    }

    // Configurar o transportador de e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar o e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'rhema.corretora@gmail.com',
      subject: `📩 Nova mensagem de contato - ${nome}`,
      html: `
        <h2 style="color: #1A4E78;">📩 Nova mensagem do site</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f7fa;">Nome</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${nome}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f7fa;">E-mail</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f7fa;">Assunto</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${assunto || 'Não informado'}</td>
          </tr>
        </table>

        <h3 style="margin-top: 20px;">💬 Mensagem:</h3>
        <div style="background: #f5f7fa; padding: 20px; border-radius: 8px; border-left: 4px solid #1A4E78;">
          <p style="margin: 0; white-space: pre-wrap;">${mensagem}</p>
        </div>

        <hr style="margin: 30px 0; border: 1px solid #eee;" />
        
        <p style="color: #666; font-size: 12px;">
          Esta mensagem foi enviada através do formulário de contato do site Rhema.<br/>
          <strong>Responder para:</strong> <a href="mailto:${email}" style="color: #1A4E78;">${email}</a>
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
