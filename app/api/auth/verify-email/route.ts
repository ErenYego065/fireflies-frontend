import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request, res: Response) {
  try {
    const { email, code } = await request.json();

    const userResponse = await sql`
          SELECT * FROM users WHERE email=${email}
        `;

    if (
      userResponse.rows.length === 0 ||
      code !== userResponse.rows[0].verifycode
    ) {
      throw new Error("User not found");
    }

    await sql`UPDATE users
            SET verified = TRUE
            WHERE email = ${email};
          `;

    return NextResponse.json({ message: "success" });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
