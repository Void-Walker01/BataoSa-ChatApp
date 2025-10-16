import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.get('/',(req,res)=>{
//   res.status(200).json({
//     status: 'ok',
//     message:"backend is running"
//   });
// })

app.get('/api/v1/health',(req,res)=>{
  res.status(200).json({
    status: 'ok',
    message:"backend is running"
  });
});

export default app;

