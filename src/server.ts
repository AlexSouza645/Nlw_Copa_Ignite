import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors  from "@fastify/cors";


const prisma = new PrismaClient({
    log :['query']
})


async function bootstrap() {
    const fastify = Fastify({
        logger: true//  fastify vai soltando log para ver tudo oq acorre na aplicação
    })
await fastify.register(cors,{
    origin:true,
})

    // criar primeira rota
    // arrow function -função anonima
    fastify.get('/pools/count', async() => {
      const count= await  prisma.pool.count({
           
        })
        return { count}
    })
 
    



    await fastify.listen({ port: 3333 }) 
}

bootstrap()