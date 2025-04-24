import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import dotenv from 'dotenv';

dotenv.config();

const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ['ip.src'],
    rules: [
        // protect from SQL injection and other attacks
        shield({mode: 'LIVE'}),
        detectBot({
            // block all bots
            mode: 'LIVE',
            allow: [
                // search engines are also bots so allow search engines
                'CATEGORY:SEARCH_ENGINE',
            ],
        }),
        // rate limiting
        tokenBucket({
            mode: 'LIVE',
            refillRate: 5,
            interval: 10,
            capacity: 10,
        }),
    ],
});

export default aj