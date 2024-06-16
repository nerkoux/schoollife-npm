import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';



// Import the schoolutil functions from the main package
import {
  welcomeToSchool,
  homework,
  lunchTime,
  registration,
  examReminder,
  projectDeadline,
  clubMeeting,
  partyReminder,
  nostalgia,
} from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory


// API routes
app.get('/', (req, res) => {
  res.json({ message: welcomeToSchool() });
});

app.get('/homework', (req, res) => {
  const { subject, assignment } = req.query;
  res.json({ message: homework(subject, assignment) });
});

app.get('/nostalgia', async (req, res) => {
  try {
    const quote = await nostalgia();
    res.json({ quote: quote });
  } catch (error) {
    console.error('Error in nostalgia route:', error);
    res.status(500).json({ error: 'Failed to fetch quote.' });
  }
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});