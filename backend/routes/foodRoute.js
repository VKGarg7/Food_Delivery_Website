import express from 'express';
import { addFood } from '../controllers/foodControllers.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage: storage });

foodRouter.post("/add",upload.single("image"),addFood)





export default foodRouter;