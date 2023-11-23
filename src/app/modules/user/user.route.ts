import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();
//user
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getSingleUser);
//update user TODO
router.delete('/:userId', UserController.deleteUser);
//orders
router.put('/:userId/orders', UserController.addNewProductOrder);

export default router;
