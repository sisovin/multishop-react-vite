import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

const app: Express = express();

/// Configure CORS to allow requests from your frontends
const corsOptions = {
  origin: [
    "http://localhost:3000", // frontend-lynx
    "http://192.168.50.131:3000",
    "http://localhost:5173",
    "http://192.168.50.131:5173", // frontend-web (assuming it runs on 5173)
  ],
  credentials: true, // If you need to send cookies with requests
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));

// Basic route
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

// Another test route
app.get('/api/status', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    environment: process.env.NODE_ENV
  });
});

export default app;