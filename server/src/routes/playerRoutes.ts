import { Router } from 'express';
import multer from 'multer';
import { createPlayer } from '../controllers/playerController';

const router = Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, 'src/uploads'),
  filename: (_, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/players', upload.single('photo'), createPlayer);

export default router;
