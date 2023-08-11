import { Router } from 'express';
import { createUserCtrl, getUsersCtrl, getUserByIdCtrl } from '../controllers/user.controller.js';
import { createUserSchema } from '../model/user.model.js';
import { validateSchema } from '../middleware/validationSchema.js';

const userRouter = Router();

userRouter.get('/', getUsersCtrl);
userRouter.get('/:id', getUserByIdCtrl);

// con createCheckSchema se validan los campos del body y luego
// se pasa a validateSchema para que se ejecute la validación
userRouter.post('/', createUserSchema, validateSchema, createUserCtrl);

export { userRouter };
