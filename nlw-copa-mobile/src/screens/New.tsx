import { VStack, Heading } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg"
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {

    return (
        <VStack flex={1} bg="gray.900"  >

            <Header title="Criar novo bolão" />
            <VStack mt={8} mx={5} alignItems="center" >
                <Logo />
                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center" >
                    Crie seu próprio bolão da copa e compratilhe com os amigos
                </Heading>

                <Input
                    mb={2}
                    placeholder="Qual o nome do seu bolão?" 
                    />

                    <Button
                    title="CRIAR MEU BOLÃO"/>
            </VStack>


        </VStack>
    )
}