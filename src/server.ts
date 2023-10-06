import Fastify from "fastify";



async function bootstrap() {
    const fastify = Fastify({
        logger: true//  fastify vai soltando log para ver tudo oq acorre na aplicação
    })



    // criar primeira rota
    // arrow function -função anonima
    fastify.get('/pools/count', () => {
        return { count: 1 }
    })
 
    



    await fastify.listen({ port: 3333 })
}

bootstrap()