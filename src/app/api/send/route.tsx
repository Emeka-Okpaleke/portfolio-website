"use client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: NextRequest) {
  try {
    const { data } = await resend.emails.send({
      from: fromEmail,
      to: ["olisemekaokpaleke@yahoo.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email body</p>
        </>
      ),
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
