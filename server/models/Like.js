import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
    name:{
        type: String,
        default: "GlobalLikes",
    },
    count: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model("Like",LikeSchema);