interface HomeProps{
  count: number;
}


export default function Home(props: HomeProps) {
  return <h1>Contagem : {props.count}</h1>;
}
export const getServerSidePops = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();
  //.then(response => response.json())//retorna em formato json
  //.then(data =>{
  console.log(data); //busca os dados e verifica se os dados foram buscados corretamente
  return {
    props: {
      count: data.count,
    },
  };
};
