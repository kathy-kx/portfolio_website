// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; // Use postman to test this endpoint. POST http://localhost:3000/api/send

export async function POST(req, res) {
  try {
  const body = await req.json();
  const {email, subject, message} = body;
  
  if (!email || !subject || !message) {
    return Response.json(
      { error: 'Missing required fields' }, 
      { status: 400 }
    );
  }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['kzhu011@uottawa.ca', email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting me!</p>
        <p>New message submitted from: <strong> ${email} </strong></p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}