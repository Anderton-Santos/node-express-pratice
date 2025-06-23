import { Request, Response } from 'express';
import { registerUserService } from '../service/userService'; 

export const registerUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await registerUserService(email, password);
    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
