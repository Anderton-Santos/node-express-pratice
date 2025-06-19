import  Jwt  from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET!;

const mockUser = {
    id: '123',
    email: 'teste@teste.com',
    password: '123123',
}

export const authenticateUser = (email: string, password:string) =>{

    if(email !== mockUser.email || password !== mockUser.password){
        return null
    }

    const token = Jwt.sign(
        {id: mockUser.id, email:mockUser.email},
        JWT_SECRET,
        {expiresIn: "1h"}
    )

    return token
}