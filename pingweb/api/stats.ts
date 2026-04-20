import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    const CHANNEL_ID = process.env.SE_CHANNEL_ID;
    const JWT_TOKEN = process.env.SE_JWT_TOKEN;


    if (!CHANNEL_ID || !JWT_TOKEN) {
        return res.status(500).json({ error: 'Missing env' });
    }

    const url = `https://api.streamelements.com/kappa/v2/sessions/${CHANNEL_ID}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`,
                'Accept': 'application/json'
            }
        });

        // 檢查 StreamElements API 是否有回傳成功
        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({ error: 'SE API Error', details: errorText });
        }
        
        const data = await response.json();

        return res.status(200).json(data);
    } catch (error) {
        console.error("Backend Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}