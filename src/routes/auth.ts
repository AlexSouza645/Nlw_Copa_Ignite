import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { z } from "zod"


export async function authRoutes(fastify: FastifyInstance) {

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

        return { userInfo }


    })

}