import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import ShortUniqueId from "short-unique-id"
import { z } from "zod"
import "@fastify/jwt";
import { authenticate } from "../plugins/atuthenticate";



export async function poolRoutes(fastify: FastifyInstance) {
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

        // let ownerId = null;
        try {

            await request.jwtVerify()
            await prisma.pool.create({
                data: {
                    title,
                    code,
                    userId: request.user.sub,


                    participants: {
                        create: {
                            userId: request.user.sub
                        }
                    }
                }


            })

            // chegar aqui
        } catch {
            await prisma.pool.create({
                data: {
                    title,
                    code
                }


            })
            const uppercaseCode = code.toUpperCase();
            return reply.status(201).send({ uppercaseCode })
        }


        //rota para entrar em um bolao
        fastify.post('/pools/:id/join',
            { onRequest: [authenticate] },
            (request, reply) => { 
                const joinPoolBody=z.object({
                    code:z.string()
                })
                const{code}= joinPoolBody.parse(request.body)
            })







    })

}