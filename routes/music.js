import { Router } from 'express';
const router = Router();

import { getAllMusic, getSingleMusic, createMusic, updateMusic, deleteMusic } from '../controllers/music';

router.get('/', getAllMusic);

router.get('/:id', getSingleMusic);

router.post('/', createMusic);

router.put('/:id', updateMusic);

router.delete('/:id', deleteMusic);

export default router;