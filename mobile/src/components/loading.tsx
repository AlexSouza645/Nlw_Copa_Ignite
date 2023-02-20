import {Center, Spinner} from 'native-base'//center é centralizar o texto e o spinner aniamaçãomde loading

export function Loading(){
    return (
        <Center flex={1} bg='gray.900'>//flex de 1 para garantir que ele vai utilizar todo o espaço da tela 
            <Spinner color='yellow.500'>

            </Spinner>
        </Center>)
}