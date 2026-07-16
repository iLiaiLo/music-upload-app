import Musics from "../models/musicModel.js";
import AppError from "../errorHandlers/appError.js";
const addToPlayList = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new AppError("No file uploaded", 400);
      return next(error);
    }
    const { filename, mimetype } = req.file;
    if (mimetype !== "audio/mpeg") {
      const error = new AppError("file type must be audio/mpeg (MP3)", 400);
      return next(error);
    }

    const dest = process.env.AUDIO_DEST;
    const url = dest + filename;

    const newMusic = await Musics.create({ url });
    const { _id } = newMusic;
    return res.status(201).json({
      message: "new music successfully added to playlist",
      _id,
      url,
    });
  } catch (error) {
    next(error);
  }
};

export default addToPlayList;
