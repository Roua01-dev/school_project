import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url'; 
import { getCours, getCourById, createCour, updateCour, deleteCour } from '../controlers/Cours.js';
import { verifyUser } from '../middleware/AuthUser.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../coursFiles'));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get('/cours', verifyUser, getCours);
router.get('/cours/:id', verifyUser, getCourById);

router.post('/cours', verifyUser, upload.single('file'), createCour);
router.patch('/cours/:id', verifyUser, updateCour);
router.delete('/cours/:id', verifyUser, deleteCour);

export default router;
