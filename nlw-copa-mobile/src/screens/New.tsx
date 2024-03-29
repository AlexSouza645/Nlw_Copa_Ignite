import { VStack, Heading, Text } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg"
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { useState } from "react";

export function New() {
    const [title, setTitle]= useState('')
    async function handlePoolCreate() { 


    }
    return (
        <VStack flex={1} bg="gray.900" >

            <Header title="Criar novo bolão" />
            <VStack mt={8} mx={5} alignItems="center" >
                <Logo />
                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center" >
                    Crie seu próprio bolão da copa{''} e compratilhe com os amigos
                </Heading>

                <Input
                    mb={2}
                    placeholder="Qual o nome do seu bolão?"
                />
 
                <Button
                    // type='SECONDARY'
                    title="CRIAR MEU BOLÃO"  
                    onPress={handlePoolCreate}/>
                   


                <Text color='gray.200' fontSize='sm' textAlign='center' px={10} mt={4}>
                    Após criar seu bolão, você receberá um código único que poderá usar para convidar
                    outras pessoas.

                </Text>
            </VStack>


        </VStack>
    )
}