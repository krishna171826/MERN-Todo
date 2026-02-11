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
    origin: 'http://localhost:5173', 
}))
app.use(express.json());
app.use(ratelimiter)

app.use('/api/notes', notesRoutes);

connectDB().then(() => {

app.listen(PORT, '0.0.0.0', () => {
    console.log("server on port 3000");
});
})
