import express from 'express';
import { signup } from '../controllers/user';
import { myController } from '../controllers/book';
const router = express.Router();

/* GET users listing. */
router.get('/', myController);

router.post('/', signup);

export default router;
