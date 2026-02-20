import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import ratelimiter from "./middleware/rateLimiter.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT

// middleware for notes conntrolleur 
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
    credentials: true
}))

app.use(express.json());
app.use(ratelimiter)

app.use('/api/notes', notesRoutes);

connectDB().then(() => {

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Failed to connect to DB", err);
});
