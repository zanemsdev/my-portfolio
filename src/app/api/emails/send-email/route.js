import { config } from "dotenv";
import nodemailer from "nodemailer";
console.log("send-emails.js API handler is loaded");
config();

export async function POST(req) {
  const formData = await req.formData();
  const from = formData.get("from");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const nameFrom = formData.get("nameFrom");
  const phone = formData.get("phone");

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

    let info2 = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: from,
      subject: "NOREPLY - Formulaire de contact Rémy CHEVALIER",
      html: `
    <div style="max-width: 600px; margin: 50px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
        <h1 style="color: #333333;">Merci de nous avoir contactés !</h1>
        <p style="line-height: 1.6; color: #666666;">Bonjour ${nameFrom},</p>
        <p style="line-height: 1.6; color: #666666;">Nous avons bien reçu votre message et vous remercions de nous avoir contactés. Notre équipe s'efforcera de vous répondre dans les plus brefs délais.</p>
        <p style="line-height: 1.6; color: #666666;">En attendant, vous pouvez consulter notre site web pour plus d'informations :</p>
        <a href="https://remy-chevalier.fr" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 5px;">Visitez notre site</a>
        <p style="margin-top: 20px; font-size: 0.9em; color: #999999;">Ceci est un message automatique. Merci de ne pas y répondre directement.</p>
    </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Message sent: %s", info2.messageId);
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
