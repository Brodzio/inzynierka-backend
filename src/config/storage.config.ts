import { diskStorage } from "multer";
import { extname } from "path";

export const storage = diskStorage({
    destination: "./uploads",
    filename: (req, file, callback) => {
      callback(null, generateFilename(file));
    }
  });
  
  function generateFilename(file) {
      console.log(file);
    return `${Date.now()}.${extname(file.originalname)+'jpg'}`;
  }
  