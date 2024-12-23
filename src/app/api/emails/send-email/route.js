import { config } from "dotenv";
import nodemailer from "nodemailer";
console.log("send-emails.js API handler is loaded");
config();

export async function POST(req) {
  const formData = await req.formData();
  const from = formData.get('from');
  const subject = formData.get('subject');
  const message = formData.get('message');
  const nameFrom = formData.get('nameFrom');
  const phone = formData.get('phone');

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Portfolio - Nouveau message: " + subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Vous avez reçu un nouveau message de votre portfolio</h2>
          <p><strong>Nom et Prénom:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">${nameFrom}</p>
          <p><strong>Email:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">${from}</p>
          <p><strong>Numéro de téléphone:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return Response.json(
      { success: true, message: "Email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);

    return Response.json(
      { success: false, message: "Email not sent", error },
      { status: 500 }
    );
  }
}
