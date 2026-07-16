import mongoose from "mongoose";
const musicSchema = new mongoose.Schema({
  url: { type: "string", required: "true", unique: "true" },
});

const Musics = mongoose.model("music", musicSchema);

export default Musics;
