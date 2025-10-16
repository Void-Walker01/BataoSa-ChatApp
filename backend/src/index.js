import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/datab.js";
import { Server } from "socket.io";
import { createServer } from "http";

dotenv.config();
const port=process.env.PORT||3000;

connectDB()
.then(()=>{
    const httpServer=createServer(app);
    const io=new Server(httpServer,{
        cors: {
            origin: process.env.CORS_ORIGIN,
            credentials: true,
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
        }
    });

    io.on("connection", (socket) => {
        console.log(`user connected: ${socket.id}`);
        socket.on("disconnect", () => {
            console.log(`user disconnected: ${socket.id}`);
        });
    });
    
    app.set("io",io);
    httpServer.listen(port,()=>{
        console.log(`✅ Server running at http://localhost:${port}`);
    });
})
.catch((err)=>{
    console.error("❌ DB connection error:", err);
});

