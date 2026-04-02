import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Like from "./models/Like.js";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Connect DB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err));

// Ensure one document exists
const initLike = async ()=>{
    const existing = await Like.findOne({name: "globalLikes"})
    if(!existing){
        await Like.create({name: "globalLikes",count: 0});
    }
}
initLike();

// email route middleware
app.use("/api/email",emailRoutes);


// GET likes
app.get("/api/likes", async (req, res) => {
  const data = await Like.findOne({ name: "globalLikes" });
  res.json({ likes: data.count });
});

// POST like
app.post("/api/likes", async (req, res) => {
  const updated = await Like.findOneAndUpdate(
    { name: "globalLikes" },
    { $inc: { count: 1 } },
    { new: true }
  );
  res.json({ likes: updated.count });
});

export default app;