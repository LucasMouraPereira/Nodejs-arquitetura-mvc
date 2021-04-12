import nodemailer, {Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
class SendMailServices {
    private client: Transporter;

    constructor() {
        nodemailer.createTestAccount()
            .then(account => {
                const transporter = nodemailer.createTransport({
                    host: account.smtp.host = 'smtp.ethereal.email',
                    port: account.smtp.port = 587,
                    secure: account.smtp.secure,
                    auth: {
                        user: account.user = 'cordia.murazik88@ethereal.email',
                        pass: account.pass = 'gn2W6Bw7TqhS1jRqS6'
                    }
                });
                this.client = transporter;
            }); 
    }
 
    async execute(to: string, subject: string, variables: object, path: string) {
        const templeteFileContent = fs.readFileSync(path).toString("utf8");

        const mailTemplateParse = handlebars.compile(templeteFileContent);

        const html = mailTemplateParse(variables);

        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: "NPS <noreplay@nps.com.br>"
        });

        console.log("Message sent: %s", message.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));

    }
}

export default new SendMailServices();