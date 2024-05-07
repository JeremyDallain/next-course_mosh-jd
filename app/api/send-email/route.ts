import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import WelcomeTemplate from '@/emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: 'test@jeremydallain.com',
        to: 'jeremy.dallain@gmail.com',
        subject: 'Hello World !!',
        react: WelcomeTemplate({ name: 'Jeremy'}),
    });

    return NextResponse.json({})
}