import Musics from "../models/musicModel.js";

const addToPlayList = async (req, res) => {
  try {
    const id = crypto.randomUUID();

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const { filename, mimetype } = req.file;
    if (mimetype !== "audio/mpeg") {
      return res
        .status(400)
        .json({ error: "file type must be audio/mpeg (MP3)" });
    }

    const dest = process.env.AUDIO_DEST;
    const url = dest + filename;

    await Musics.create({ id, url });
    return res.status(201).json({ id, url });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default addToPlayList;
