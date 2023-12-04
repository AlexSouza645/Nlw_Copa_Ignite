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
        onRequest: [authenticate]
    }, async (request, reply) => {
        const createGuessParams = z.object({
            poolId: z.string(),
            gameId: z.string(),
        })
        const createGuessBody = z.object({
            firstTeamPoints: z.number(),
            secondTeamPoints: z.number()
        })

        const { poolId, gameId } = createGuessParams.parse(request.params)
        const { firstTeamPoints, secondTeamPoints } = createGuessBody.parse(request.body)

        // validações
        const participant = await prisma.participants.findUnique({
            where: {
                userId_poolId: {
                    poolId,
                    userId: request.user.sub

                }
            }

        })

        if (!participant) {
            return reply.status(400).send({
                message: "you're not allowed to create a guess inside this pool"
            })
        }

        const guess = await prisma.guess.findUnique({
            where: {
                participantsId_gamesId: {
                    participantsId: participant.id,
                    gamesId: gameId

                }
            }
        })
        if (guess) {
            return reply.status(400).send({
                message: "you already sent a guess to this game on this pool "
            })
        }

        const game = await prisma.games.findUnique({
            where: {
                id: gameId,
            }
        })

        if (!game) {
            return reply.status(400).send({
                message: "game not found "
            })
        }

        if (game.date < new Date()) {
            return reply.status(400).send({
                message: " you cannot send guesses after the game date    "
            })
        }

        // se todas as validações passaram sera criado um novo palpite
        await prisma.guess.create({
            data:{
                gamesId : game.id,
                participantsId: participant.id,
                secondTeamPoint: secondTeamPoints,
                firstTeamPoint :firstTeamPoints,

            }
        })
        
        
        
        
        
        
        
        return reply.status(201).send()


    })

}