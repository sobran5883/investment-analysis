import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js';
// import path from 'path';

mongoose
    // .connect("mongodb+srv://sobran:sobran@cluster0.tynbv4w.mongodb.net/?retryWrites=true&w=majority")
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("Connected to MongoDB!");
    })
    .catch((err)=>{
        console.log(err);
    });

    // const __dirname = path.resolve();

app.use(express.json());    

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

//for deployment
// app.use(express.static(path.join(__dirname, '/client/dist')));
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })

//middleware for error
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})