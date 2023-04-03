// import '../styles/style.css';


// interface HomeProps {
//   count: number;
// }
import Image from 'next/image'
import appPreviewImage from '../assets/app-nlw-copa.png'
import logoImage from '../assets/logo.svg'
import usersAvatar from '../assets/avatares.png'
import iconCheckImage from '../assets/icon-check.svg'


export default function Home() {

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
              +12.592
            </span>pessoas já estão usando
          </strong> 
        </div>

        <div className='mt-10 '>
          <form className='flex gap-2'>
            <input className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm'
              type="text"
              required placeholder='Qual o nome do seu bolão ' />
            <button className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700' type='submit'>Criar meu bolão </button>
          </form>


          <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
            Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pesoas
          </p>
        </div>

        <div className='mt-10 pt-10'>
          <div>
            <Image src={iconCheckImage} alt='' />
            <div>
              <span className='text-white'>+2.034</span>
              <span className='text-white'>Bolões criados</span>
            </div>
          </div>

          <div>
            <Image src={iconCheckImage} alt='' />
            <div>
              <span className='text-white'>+192.847</span>
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




// // camada do next usao no backend
// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()
//   // .then(response => response.json())
//   // .then(data => {
//   // console.log(data)

//   return {
//     props: {
//       count: data.count,
//     }
//   }

// }
