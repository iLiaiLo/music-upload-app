import Musics from "../models/musicModel.js";

const getPlaylist = async (_, res) => {
  try {
    const playList = await Musics.find();
    return res.status(200).json(playList);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default getPlaylist;
