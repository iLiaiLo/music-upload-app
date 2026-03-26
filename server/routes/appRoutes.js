import express from "express";
import getPlaylist from "../controllers/getPlayList.js";
import uploadMusic from "../utils/uploadMusic.js";
import addToPlayList from "../controllers/addToPlayList.js";
import removeFromPlayList from "../controllers/removeFromPlayList.js";

const router = express.Router();

router.get("/", getPlaylist);
router.post("/", uploadMusic, addToPlayList);
router.delete("/:id", removeFromPlayList);

export default router;
