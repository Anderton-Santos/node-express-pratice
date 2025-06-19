// import { Request, Response } from "express";

// import {
//   getAllTodos,
//   createNewTodo,
//   updateTodo,
//   deleteTodoById
// } from '../service/todoService'

// export const getTodos = (req: Request, res: Response) => {
//   const todos = getAllTodos()
//   return res.json(todos)

// }

// export const createTodo = (req:Request, res:Response) => {
//   const {title} = req.body;
//   const newTodo = createNewTodo(title)
//   return res.status(200).json(newTodo)
 
// }

// export const updateNewTodo = (req: Request, res:Response) => {
//   const {id} = req.params
//   const {title, done} = req.body;

//   const update = updateTodo(id, {title, done})
//    if (!update) {
//     return res.status(404).json({ error: "Todo not found" });
//   }

//   return res.status(200).json(update)

// }

// export const deleteTodo = (req: Request, res: Response) => {
//  const { id } = req.params;

//   const deleted = deleteTodoById(id);
//   if (!deleted) {
//     return res.status(404).json({ error: "Todo not found" });
//   }

//   return res.status(204).send();
// };



import { Request, Response } from 'express';
import {
  getAllTodos,
  createNewTodo,
  updateTodo,
  deleteTodoById
} from '../service/todoService';

export const getTodos = async (req: Request, res: Response) => {
  const todos = await getAllTodos();
  return res.json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  const newTodo = await createNewTodo(title);
  return res.status(201).json(newTodo);
};

export const updateNewTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, done } = req.body;

  const updated = await updateTodo(id, { title, done });
  if (!updated) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  return res.status(200).json(updated);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await deleteTodoById(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  return res.status(204).send();
};
