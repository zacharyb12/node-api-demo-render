import userController from '../controllers/user.controller.js';
import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';

const userRouter = express.Router();

userRouter.route('/').post(verifyToken,userController.create);

userRouter.route('/').get(verifyToken,userController.getAll)

userRouter.route('/:id').get(verifyToken,userController.getById)    

userRouter.route('/:id').put(verifyToken,userController.update);

userRouter.route('/:id').delete(verifyToken,userController.delete);

export default userRouter;
