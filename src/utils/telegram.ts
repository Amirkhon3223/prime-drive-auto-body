const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8582449754:AAHOzqfggi3fpofQEd8OAWkM_YVpgDTCyAI';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export async function sendToTelegram(data: FormData): Promise<boolean> {
    const message = `
🚗 <b>New request from Prime Drive website!</b>

👤 <b>Name:</b> ${data.name}
📱 <b>Phone:</b> ${data.phone}
${data.email ? `📧 <b>Email:</b> ${data.email}\n` : ''}
💬 <b>Message:</b>
${data.message}

⏰ <b>Time:</b> ${new Date().toLocaleString('en-US')}
`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'HTML',
                }),
            }
        );

        const result = await response.json();
        return result.ok;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
}
