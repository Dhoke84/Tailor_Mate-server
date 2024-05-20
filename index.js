import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import './config/db.js'
import { Router } from './routes/routes.js';



const app = express();
app.use(express.json())
<<<<<<< HEAD
app.use(cors())
=======
app.use(cors({
    origin: ["https://tailor-mate-client.vercel.app"],
    methods: ["GET" , "POST", "PUT", "DELETE"],
    credentials: false
}))
>>>>>>> 702c5594cd323a89db53e9697b313e63bf824541

dotenv.config({path: "./config/.env"})

app.use('/tailormsyt', Router)


app.listen(process.env.PORT, () =>{
    console.log('Server is running on port 3000');
});
