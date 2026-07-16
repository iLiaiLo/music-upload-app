import Musics from "../models/musicModel.js";

const getPlaylist = async (_, res, next) => {
  try {
    const playList = await Musics.find().select({ _id: 1, url: 1 });
    return res.status(200).json(playList);
  } catch (error) {
    next(error);
  }
};

export default getPlaylist;
