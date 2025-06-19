import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export const authMiddleware = (req: Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: "token não encontrado"})
    }

    const [schema, token] = authHeader.split("");

    if(schema !== "Bearer" || !token){
        return res.status(401).json({error: "Formato inválido do token"})
    }

    try{
        const decoded = Jwt.verify(token, JWT_SECRET);
        (req as any).user = decoded;
        next()

    } catch(err) {
        return res.status(401).json({ error: "Token inválido ou expirado" });
    }
}