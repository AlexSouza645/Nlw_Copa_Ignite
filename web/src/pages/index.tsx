// import '../styles/style.css';


// interface HomeProps {
//   count: number;
// }
import Image from 'next/image'
import appPreviewImage from '../assets/app-nlw-copa.png'
import logoImage from '../assets/logo.svg'
import usersAvatar from '../assets/avatares.png'


export default function Home() {

  return (
    <div>
      <main>

        <Image src={logoImage} alt='logo do app Nlw Copa' />
        <h1 className='bg-white'>Crie seu próprio bolão da Copa, e compartilhe com os amigos </h1>
  <div>
    <Image src={usersAvatar} alt='imagem de avatares de usuários'/>

    <strong>
      <span>
        +12.592
      </span>pessoas já estão usando
    </strong>

    <form >
      <input type="text" required placeholder='Qual o nome do seu bolão ' />
      <button type='submit'>Criar meu bolão </button>
    </form>


    <p>
      Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pesoas 
    </p>
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
