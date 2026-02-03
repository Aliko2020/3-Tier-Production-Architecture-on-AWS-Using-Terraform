import multer from "multer";
import multerS3 from "multer-s3";
import s3 from "../config/s3.js";

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const productId = req.body.productId || req.params.productId || "unknown";
      const timestamp = Date.now();
      const safeName = file.originalname.toLowerCase().replace(/\s+/g, "-");

      cb(null, `products/${productId}/${timestamp}_${safeName}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, 
});

export { upload }; 
