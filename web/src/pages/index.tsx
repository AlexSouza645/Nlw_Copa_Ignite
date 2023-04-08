// import '../styles/style.css';


import Image from 'next/image'
import appPreviewImage from '../assets/app-nlw-copa.png'
import logoImage from '../assets/logo.svg'
import usersAvatar from '../assets/avatares.png'
import iconCheckImage from '../assets/icon-check.svg'
import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {

  const [poolTitle, setPoolTitle] = useState('') //valor inicial da variavel que usa 2 parametros na array
  //primeiro é uma variavel o segundo é uma funcao para atualizar o estado da variavel

  // console.log(poolTitle)

  //criar o bolao


  // criar uma função onSubmit para o form 
  async function createPool(event: FormEvent) {
    event.preventDefault()
    try {
      const response = await api.post('/pools', {
        title: poolTitle
      });
      const { code } = response.data

      // permitir o usuario mover pra area de transferencia o codigo unico
      await navigator.clipboard.writeText(code)
      // depois dque foi copiado criar um alerta
      alert('bolão criado com sucesso, o código foi copiado para a área de transferência')
    } catch (err) {
      console.log(err)
      alert('falha ao criar o bolão, tente novamente')
    }}

    return (
      <div className='max-w-[1124px] mx-auto h-screen grid grid-cols-2  gap-28 items-center'>
        <main>

          <Image src={logoImage} alt='logo do app Nlw Copa' />
          <h1 className='mt-14 text-white text-5xl font-bold leading-tight' >
            Crie seu próprio bolão da Copa, e compartilhe com os amigos
          </h1>

          <div className='mt-10 flex items-center gap-2'>
            <Image src={usersAvatar} alt='imagem de avatares de usuários' />

            <strong className='text-gray-100 text-xl'>
              <span className='text-ignite-500'>
                +{props.userCount}
              </span>pessoas já estão usando
            </strong>
          </div>

          <div className='mt-10 '>
            <form onSubmit={createPool} className='flex gap-2'>
              {/* sempre que o valor do input mudar pegar o evento e fazer setPoolTitle colocando o valor digitado no input  */}
              <input className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
                type="text"
                required placeholder='Qual o nome do seu bolão ' onChange={event => setPoolTitle(event.target.value)} />
              <button className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700' type='submit'>
                Criar meu bolão </button>



            </form>


            <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
              Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
            </p>
          </div>

          <div className='mt-10 pt-10 border-t border-gray-600  flex items-center justify-between text-gray-100'>
            <div className='flex items-center gap-6 '>
              <Image src={iconCheckImage} alt='' />
              <div className='flex flex-col'>
                <span className='font-bold text-2xl'> + {props.poolCount} </span> {/*  chamada feita no backend*/}
                <span className=''>Bolões criados</span>
              </div>
            </div>

            <div className='w-px h-14 bg-gray-600'>

            </div>

            <div className='flex items-center gap-6'>
              <Image src={iconCheckImage} alt='' />
              <div className='flex flex-col'>
                <span className='font-bold text-2xl'>+{props.guessCount}</span>
                <span className='text-white'>Palpites enviados</span>
              </div>
            </div>
          </div>

        </main>
        <Image
          src={appPreviewImage}
          alt="Dois celulares exibindo uma prévia do app Nlw Copa"
          quality={100} />
      </div>
    )
  }




  // camada do next usao no backend
  export const getServerSideProps = async () => {

    const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
      api.get('pools/count'),
      api.get('guesses/count'),
      api.get('users/count')
    ])


    // const data = await response.json()
    // .then(response => response.json())
    // .then(data => {
    // console.log(data)

    return {
      props: {
        poolCount: poolCountResponse.data.count,
        guessCount: guessCountResponse.data.count,
        userCount: userCountResponse.data.count,
      }
    }

  }
