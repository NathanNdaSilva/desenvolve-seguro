'use server';

import nodemailer from 'nodemailer';

export async function sendContactFormEmail(formData: FormData) {
  try {
    // Pegar os dados do formulário
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const assunto = formData.get('assunto') as string;
    const mensagem = formData.get('mensagem') as string;

    // Validações básicas
    if (!nome || nome.length < 2) {
      return { success: false, error: 'Nome é obrigatório' };
    }
    if (!email || !email.includes('@')) {
      return { success: false, error: 'E-mail inválido' };
    }
    if (!mensagem || mensagem.length < 5) {
      return { success: false, error: 'Mensagem é obrigatória' };
    }

    // Transportador 100% direto
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'timepack10@gmail.com',
        pass: 'nhwmzmyntwwguaug',
      },
    });

    // Configurar o e-mail que será enviado
    const mailOptions = {
      from: 'timepack10@gmail.com',
      to: 'timepack10@gmail.com',
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
          ${telefone ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f7fa;">Telefone</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${telefone}</td>
          </tr>
          ` : ''}
          ${assunto ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f7fa;">Assunto</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${assunto}</td>
          </tr>
          ` : ''}
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

        <p style="color: #999; font-size: 11px; margin-top: 20px;">
          Enviado em: ${new Date().toLocaleString('pt-BR')}
        </p>
      `,
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return { success: true };

  } catch (error) {
    console.error('Erro crítico no servidor do e-mail:', error);
    return { success: false, error: 'Erro ao enviar mensagem.' };
  }
}
