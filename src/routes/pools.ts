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
            async (request, reply) => {
                const joinPoolBody = z.object({
                    code: z.string()
                })
                const { code } = joinPoolBody.parse(request.body)
            })

        fastify.get('/pools', {

            onRequest: [authenticate]
        }, async (request) => {
            const pools = await prisma.pool.findMany({
                where: {
                    participants: {
                        some: {
                            userId: request.user.sub
                        }
                    }
                }
            })
            return(pools)
        })


        // validação antes de criar o participante
        const pool = await prisma.pool.findUnique({
            where: {
                code,
            }, include: {
                participants: {
                    where: {
                        userId: request.user.sub,
                    }
                }
            }
        })
        if (!pool) {
            return reply.status(400).send({
                message: "pool not found"
            })
        }
        if (pool.participants.length > 0) {
            return reply.status(400).send({
                message: "you already joined this pool"
            })

        }

        if (!pool.userId) {
            await prisma.pool.update({
                where: {
                    id: pool.id,
                },
                data: {
                    userId: request.user.sub
                }
            })
        }
        // se tudo estiver correto ira seguir para a seguinte rota
        await prisma.participants.create({
            data: {
                poolId: pool.id,
                userId: request.user.sub,
            }

        })
        return reply.status(201).send()
    })
}