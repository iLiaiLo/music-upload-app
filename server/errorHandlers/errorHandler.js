import { MulterError } from "multer";

const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${req.method} ${req.path} :`, err.message);

  let statusCode = err.statusCode || 500;
  if (err instanceof MulterError) {
    statusCode = 400;
  }

  const response = {
    success: false,
    message: err.message || "Internal Server Error",
    code: err.code || null,
  };

  return res.status(statusCode).json(response);
};

export default errorHandler;
