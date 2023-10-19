import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import { z } from "zod"
import ShortUniqueId from "short-unique-id";


const prisma = new PrismaClient({
    log: ['query']
})


async function bootstrap() {
    const fastify = Fastify({
        logger: true//  fastify vai soltando log para ver tudo oq acorre na aplicação
    })
    await fastify.register(cors, {
        origin: true,
    })


    // criar primeira rota
    // arrow function -função anonima
    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count({

        })
        return { count }
    })

    // rota de usuario
    fastify.get('/user/count', async () => {
        const count = await prisma.user.count({

        })
        return { count }

    })

    // rota  de palpites

    fastify.get('/guesses/count', async () => {
        const count = await prisma.guess.count({

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




    await fastify.listen({ port: 3333 })
}

bootstrap()    