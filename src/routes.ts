import { Router } from 'express';

import {
  getTodos,
  createTodo,
  updateNewTodo,
  deleteTodo
} from './controller/todoController'

import { authenticateUserController } from './controller/authController';

const router = Router();

router.get('/todos', getTodos)
router.post('/todos', createTodo)
router.put('/todos:id', updateNewTodo)
router.delete('/todos/:id', deleteTodo)

router.post('/login', authenticateUserController)


export default router