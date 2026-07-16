import Musics from "../models/musicModel.js";
import fs from "node:fs/promises";
import path from "path";
import AppError from "../errorHandlers/appError.js";
const removeFromPlayList = async (req, res, next) => {
  try {
    const { id } = req.params;

    const music = await Musics.findOneAndDelete({ _id: id });

    if (!music) {
      const error = new AppError("music was not found", 404);
      return next(error);
    }
    const filename = path.basename(music.url);
    await fs.unlink(path.join("./public", filename));

    return res.status(200).json({ message: "music deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default removeFromPlayList;
