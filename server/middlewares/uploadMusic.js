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
const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024,
    files: 1,
    fields: 1,
    fieldNestingDepth: 1,
  },
});

const uploadMusic = upload.single("audio");

export default uploadMusic;
