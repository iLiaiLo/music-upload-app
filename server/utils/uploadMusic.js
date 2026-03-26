import multer from "multer";

const options = {
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
};
const storage = multer.diskStorage(options);
const upload = multer({ storage });

const uploadMusic = upload.single("audio");

export default uploadMusic;
