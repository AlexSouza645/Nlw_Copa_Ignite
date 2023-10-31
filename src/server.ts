import Fastify from "fastify";
import cors from "@fastify/cors";
import { poolRoutes } from "./routes/pools";
import { authRoutes } from "./routes/auth";
import { gamesRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";
import jwt from "@fastify/jwt"

async function bootstrap() {
    const fastify = Fastify({
        logger: true//  fastify vai soltando log para ver tudo oq acorre na aplicação
    })
    await fastify.register(cors, {
        origin: true,
    })

    ''
    // utilização do jwt
    await fastify.register(jwt,{
        secret:'nlwCopa',
    })
    //  em produção isso precisa ser em uma variavel ambiente

    //registers
    await fastify.register(poolRoutes)
    await fastify.register(authRoutes)
    await fastify.register(gamesRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(userRoutes)



    await fastify.listen({ port: 3333 })
}

bootstrap()    