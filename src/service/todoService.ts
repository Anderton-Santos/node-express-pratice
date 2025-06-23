
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