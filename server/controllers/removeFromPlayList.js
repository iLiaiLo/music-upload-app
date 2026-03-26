import Musics from "../models/musicModel.js";
import fs from "node:fs/promises";
import path from "path";
const removeFromPlayList = async (req, res) => {
  try {
    const { id } = req.params;

    const music = await Musics.findOneAndDelete({ id });

    if (!music) {
      return res.status(404).json({ message: "music was not found" });
    }
    const filename = path.basename(music.url);
    await fs.unlink(path.join("./public", filename));

    return res.status(200).json({ message: "music deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default removeFromPlayList;
