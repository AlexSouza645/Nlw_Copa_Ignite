import { VStack, Heading, Text } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg"
import { Input } from "../components/Input";
import { Button } from "../components/button";

export function Find () {

    return (
        <VStack flex={1} bg="gray.900"  >

            <Header title="Buscar por código"  showBackButton/>
            <VStack mt={8} mx={5} alignItems="center" >
               
                <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center" >
                   Encontre um bolão através de  {'\n'}seu código único  
                </Heading>

                <Input
                    mb={2}
                    placeholder="Qual o nome do seu bolão?"
                />

                <Button
                    // type='SECONDARY'
                    title="CRIAR MEU BOLÃO" />


               
            </VStack>


        </VStack>
    )
}