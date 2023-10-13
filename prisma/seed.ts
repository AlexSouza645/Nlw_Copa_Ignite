import { PrismaClient } from "@prisma/client"

// fazer conexão com banco de dados
const prisma = new PrismaClient(

)


async function main() {
    const user = await prisma.user.create({   //criar um novo usuario 
        data: {
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            avatarUrl: 'https://github.com/AlexSouza645.png',

        }
    })

    //  criar um bolao
    const pool = await prisma.pool.create({
        data: {

            title: 'Example Pool',
            code: 'BOL123',
            userId: user.id,

            participants: {
                create: {
                    userId: user.id
                }
            }



        }



    })
    await prisma.games.create({
        data: {
            date: '2023-03-20T20:23:35.936Z',
            firstTeamCountryCode: "DE",
            secondTeamCountryCode: 'BR'
        }
    })

    await prisma.games.create({
        data: {
            date: '2023-03-19T20:23:35.936Z',
            firstTeamCountryCode: "BR",
            secondTeamCountryCode: 'AR',


            guesses:{
                create:{
                    firstTeamPoint:2,
                    secondTeamPoint:1,

                    participant:{
                        connect:{
                            userId_poolId:{
                                userId: user.id,
                                poolId: pool.id
                            }
                         }
                    }
                }
            }
        }
    })
}




main()
