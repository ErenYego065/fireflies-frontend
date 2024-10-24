import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const generateRandomString = (length = 6) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};


export async function POST(request: Request, res: Response) {
  try {
    const { fullName, email, password } = await request.json();

    const userResponse = await sql`
          SELECT * FROM users WHERE email=${email}
        `;

    if (userResponse.rows.length > 0) {
      throw new Error("Already existed user")
    }

    const hashedPassword = await hash(password, 10);

    const verifyCode = generateRandomString();

    const currentTime = new Date().toISOString();

    await sql`INSERT INTO users (fullName, email, password, verifycode, verificationsent) 
              VALUES (${fullName}, ${email}, ${hashedPassword}, ${verifyCode}, ${currentTime})`;

    await resend.emails.send({
      from: "info@eer-wsd.agency",
      to: [email],
      subject: "Verify Your Email",
      react: EmailTemplate({ verifyCode })
    })

    return NextResponse.json({ email });

  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }
}