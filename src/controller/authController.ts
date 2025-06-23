import { Request, Response } from 'express';
import { authenticateUser } from '../service/authService';

export const authenticateUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await authenticateUser(email, password);
    return res.json({ status: 'success', token });
  } catch (error: any) {
    return res.status(401).json({ status: 'error', message: error.message });
  }
};
