import { Router } from 'express';
const router = Router();

import { getAllUsers, getSingleUser, createUser, updateUser, deleteUser } from '../controllers/users';

router.get('/', getAllUsers);

router.get('/:id', getSingleUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;