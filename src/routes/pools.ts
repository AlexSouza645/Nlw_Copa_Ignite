import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import ShortUniqueId from "short-unique-id"
import { z } from "zod"



export async function poolRoutes(fastify:FastifyInstance){
    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count({

        })
        return { count }
    })

      //  segunda rota
      fastify.post('/pools', async (request, reply) => {// requisição e resposta

        const createPoolBody = z.object({
            title: z.string(),
        })
        const { title } = createPoolBody.parse(request.body)



        const generate = new ShortUniqueId({ length: 6 });
        const code = generate.randomUUID(); // Use o método randomUUID() para gerar um ID aleatório.

        const uppercaseCode = code.toUpperCase();


        await prisma.pool.create({
            data: {
                title,
                code
            }


        })

        return reply.status(201).send({ uppercaseCode })

    })

}