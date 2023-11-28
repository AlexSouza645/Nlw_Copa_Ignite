import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/atuthenticate"
import { z } from "zod"


export async function guessRoutes(fastify: FastifyInstance) {
    // rota  de palpites

    fastify.get('/guesses/count', async () => {
        const count = await prisma.guess.count({

        })
        return { count }

    })
    fastify.post('/pools/:poolId/games/:gameId/guesses ', {
        onRequest:[authenticate]
    },async (request,reply) => {
        const createGuessParams = z.object({
              poolId:z.string(),
              gameId: z.string(),
        })
 const createGuessBody= z.object({
    firstTeamPoints:z.number(),
    secondTeamPoints: z.number()
 })

        const {poolId, gameId}= createGuessParams.parse(request.params)
        const {firstTeamPoints, secondTeamPoints}= createGuessBody.parse(request.body)
        
        
        return {
            poolId,
            gameId,
            firstTeamPoints,
            secondTeamPoints      
        }
         
    })
}