import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // Gmail App Password (not real password)
    },
  });

  const mailOptions = {
    from: email, // don't hardcode a different "from"
    to: process.env.EMAIL_RECEIVER, // your main email to receive
    subject: `New Message from ${name}`,
    text: `PORTFOLIO MESSAGE\nName: ${name}\nEmail: ${email}\n\n${message}`,
    replyTo: email, // So replies go to sender
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
