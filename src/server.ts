// import express, { Request, Response, NextFunction } from 'express';
// import 'express-async-errors' //Captura errors lançados com throw new Error
// import cors from 'cors' //Middlewares que permite req de outros dominios

// import router from './routes';  // Você importa suas rotas de outro arquivo

// const app = express();  // Cria a aplicação Express
// app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições
// app.use(cors())

// app.use(router); // Usa seu roteador principal, onde estão definidas as rotas

// app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
//     if(err instanceof Error){
//         //Se for uma instancia do tipo error
//         return res.status(400).json({
//             error: err.message
//         })
//     }

//     return res.status(500).json({
//         status: 'error',
//         message: 'internal server Error'
//     })
// })

// const PORT = 3333;
// app.listen(PORT, () => {
//   console.log("Servidor online");  // Inicia o servidor escutando na porta 3333
// });


import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import dotenv from "dotenv";

import todoRoutes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ status: 'error', message: 'Internal server error' });
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
