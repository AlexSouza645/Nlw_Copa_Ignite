import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { z } from "zod"
import { authenticate } from "../plugins/atuthenticate"


export async function authRoutes(fastify: FastifyInstance) {

    // criar uma rota de usuarios logados 
    fastify.get("/me",
        {
            onRequest: [authenticate]
        },
        async (request) => {

            return { user: request.user }
        })

    fastify.post("/users", async (request) => {
        const createUserBody = z.object({
            access_token: z.string()
        })
        const { access_token } = createUserBody.parse(request.body)


        // comunicacao com api do google
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            method: 'GET',
            headers: {
                Authorization: `Bearer${access_token}`
            }
        })

        // retornara algumas informações

        const userData = await userResponse.json()

        const userInfoSchema = z.object({
            id: z.string(),
            email: z.string().email(),
            name: z.string(),
            picture: z.string().url()
        })
        // validação de dados 
        const userInfo = userInfoSchema.parse(userData)

        let user = await prisma.user.findUnique({
            where: {
                googleId: userInfo.id,
            }
        })

        if (!user) {
            user = await prisma.user.create({

                data: {
                    googleId: userInfo.id,
                    name: userInfo.name,
                    email: userInfo.email,
                    avatarUrl: userInfo.picture,
                }
            })
        }

        // //  criar uma rota de auth para o usuario
        const token = fastify.jwt.sign({
            name: user.name,
            avatarUrl: user.avatarUrl

        }, {
            sub: user.id,//sub quem gerou o token 
            expiresIn: "1 days"

        })


        return { token }

    })


} 