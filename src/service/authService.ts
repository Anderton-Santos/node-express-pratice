import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import prisma from '../prisma';

const JWT_SECRET = process.env.JWT_SECRET!;

export const authenticateUser = async (email: string, password:string) =>{

   const user = await prisma.user.findUnique({
    where:{email}
   })

   if(!user){
    throw new Error('Usuario encontrado')
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);
   if(!isPasswordValid) {
    throw new Error('Senha incorreta')
   }


    const token = jwt.sign(
        {id: user.id, email:user.email},
        JWT_SECRET,
        {expiresIn: "1h"}
    )

    return token
}