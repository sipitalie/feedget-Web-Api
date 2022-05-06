import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4c5f8693770538",
    pass: "f9ad9709027a58"
  }
});

export class NodemailerMailAdapter implements MailAdapter{

  async sendMail(data: sendMailData){
    const {subject, body} =data
    
    await transport.sendMail({
      from:"Equipe Feedget <oi@feedget.com>",
      to: "Estêvão Sipitali <sipitalie@gmail.com>",
      subject,
      html:body
    })
  }
}