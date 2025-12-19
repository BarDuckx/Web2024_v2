import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, phone, email, comment } = await request.json();
    
    const text = `
🎉 Новая заявка!

👤 Имя: ${name}
📞 Телефон: ${phone}
📧 Email: ${email}
📝 Комментарий: ${comment || 'Не указан'}

⏰ ${new Date().toLocaleString('ru-RU')}
    `;
    
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: text,
        }),
      }
    );
    
    const data = await response.json();
    
    if (data.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Telegram error' }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}