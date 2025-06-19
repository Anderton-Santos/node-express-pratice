// import express, { Router, Request, Response } from 'express';

// import {
//     getTodos,
//     createTodo,
//     updateNewTodo,
//     deleteTodo
// } from './controller/todoController';

// const router: Router = express.Router();

// // router.get('/teste', (req: Request, res: Response) => {
// //     //   res.json({ ok: true });
// //     throw new Error('Erro ao fazer a req')
// // });

// router.get('/todos', getTodos);         // rota GET para listar
// router.post('/todos', createTodo);       // rota POST para criar
// router.put('/todos/:id', updateNewTodo);    // rota PUT para atualizar
// router.delete('/todo/:id', deleteTodo); // rota DELETE para apagar

// export default router;
    


import { Router } from 'express';
import {
  getTodos,
  createTodo,
  updateNewTodo,
  deleteTodo,
} from '../src/controller/todoController';

import { login, privateRoute } from '../src/controller/authController';

import { authMiddleware } from '../src/middleware/isAuthenticated';

const router = Router();

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateNewTodo);
router.delete('/todos/:id', deleteTodo);

router.post("/login", login);
router.get("/private", authMiddleware, privateRoute);

export default router;
