import { Request, Response } from "express";
import { authenticateUser } from "../service/authService";

export const login = (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = authenticateUser(email, password)

    if (!token) {
        return res.status(401).json({ error: "Credenciais inválidas" });
    }

    res.json({ token });
}


export const privateRoute = (req: Request, res: Response) => {
  const user = (req as any).user;
  res.json({ message: `Olá ${user.email}, você acessou uma rota protegida!` });
};