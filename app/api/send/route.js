// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; // 可以用postman测试。POST http://localhost:3000/api/send

export async function POST(req, res) {
  const {body} = await req.json();
  const {email, subject, message} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['kzhu011@uottawa.ca', email],
      subject: subject,
      react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting me!</p>
        <p> New message submitted</p>
        <p>{message}</p>
      </>),
    });
    // 还没有add domain
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}