import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  id: { type: "UUID", default: () => randomUUID() },
  url: { type: "string", required: "true", unique: "true" },
});

const Musics = mongoose.model("musics", musicSchema);

export default Musics;
