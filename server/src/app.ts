import express from 'express';
import cors from 'cors';
import playerRoutes from './routes/playerRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('src/uploads')); // Serve photos publicly

app.use('/api', playerRoutes);

export default app;
