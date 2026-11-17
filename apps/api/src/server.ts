import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Clinic SaaS API is running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/summary', (_req, res) => {
  res.json({
    clinics: 1240,
    patients: 8450,
    appointments: 3700,
    monthlyRevenue: '₫2.6M',
    trialMode: true,
  });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
