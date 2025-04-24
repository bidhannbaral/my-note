import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes.js';
import sql from './config/db.js';
import aj from './lib/arcjet.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false,
})); // helmet is a security tool that's used to proctect your application
app.use(morgan('dev')); // logs all the requests sent to the app

app.use(async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {
            requested: 1,
        });

        if(decision.isDenied()) {
            if(decision.reason.isRateLimit()) {
                res.status(429).json({error: 'Too many requests'});
            } else if(decision.reason.isBot()) {
                res.status(403).json({error: 'Bot access denied'});
            } else {
                res.status(403).json({error: 'Forbidden'});
            }
            return;
        }
        
        if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
            res.status(403).json({error: 'Spoofed bot detected'});
            return;
        }

        next();

    } catch (error) {
        next(error);
    }
})

app.use('/api/courses', noteRoutes);

async function initDB() {
    try {

        await sql `
            CREATE TABLE IF NOT EXISTS notes (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            topic VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log('DB created successfully');
    } catch (error) {
        console.log('Error initDB ' + error);
    }
}

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../note-app-frontend/dist')));

    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.join(__dirname, '../note-app-frontend/dist', 'index.html'));
    });
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log('Listening to port ' + PORT);
    });
});