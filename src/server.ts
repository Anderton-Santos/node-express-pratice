import express, {Request, Response, NextFunction} from 'express'

import cors from 'cors'
import dotenv from 'dotenv'
import 'express-async-errors'

dotenv.config()

import todoRouter from './routes'

const app = express()

app.use(cors)
app.use(express.json())
app.use(todoRouter)

app.use((err: Error, req:Request, res:Response, next:NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({error: err.message})
    }
     return res.status(500).json({status: 'error', message: 'Internal server error'})
})


const PORT = 3333
app.listen(PORT, () => {
    console.log("Servidor online!")
})

