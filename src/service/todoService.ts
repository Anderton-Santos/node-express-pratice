// import {v4 as uuidv4} from 'uuid'

// type Todo = {
//     id: string;
//     title: string;
//     done: boolean;
// }

// const todos: Todo[] = []

// export const getAllTodos = () => {
//     return todos
// }

// export const createNewTodo = (title: string) => {
//     const newTodo: Todo = {
//         id: uuidv4(),
//         title,
//         done: false,
//     }

//     todos.push(newTodo)
//     return newTodo

// }

// export const updateTodo = (id:string, data:Partial<Todo>) => {
//     const todo = todos.find((prev) => prev.id === id)
//     if(!todo)  return null

//     todo.title = data.title ?? todo.title
//     todo.done = data.done ?? todo.done

//     return todo

// }

// export const deleteTodoById = (id: string) => {
//   const index = todos.findIndex((todo) => todo.id === id);
//   if (index === -1) return null;

//   todos.splice(index, 1);
//   return true;
// };

import prisma from '../prisma'

export const getAllTodos = async () => {
  return await prisma.todo.findMany();
};

export const createNewTodo = async (title: string) => {
  return await prisma.todo.create({ data: { title } });
};

export const updateTodo = async (id: string, data: { title?: string; done?: boolean }) => {
  try {
    return await prisma.todo.update({ where: { id }, data });
  } catch {
    return null;
  }
};

export const deleteTodoById = async (id: string) => {
  try {
    await prisma.todo.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
};
