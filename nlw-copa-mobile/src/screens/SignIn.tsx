import { Center, Text, Icon } from "native-base"
import Logo from "../assets/logo.svg"
import { Button } from "../components/button"
import { Fontisto } from '@expo/vector-icons'
import { useAuth } from "../hooks/useAuth"



export function SignIn() {
    const { signIn, isUserLoading } = useAuth()
    // console.log('dados do usuario', user)
    return (
        <Center flex={1} bgColor={'gray.900'} padding={7}>
            <Logo width={212} height={40} />

            <Button
                title="ENTRAR COM O GOOGLE"
                leftIcon={<Icon as={Fontisto} name="google" size='md' color="white" />}
                type="SECONDARY"
                mt={12}
                onPress={signIn}
                isLoading={isUserLoading}
                _loading={{_spinner:{color:'white'}}}

            //O QUE DEVE ACONTECER QUANDO O BOTÃO FOR Clicado
            //botao de loadin
            //   isLoading={true}
            />

            <Text color="white" textAlign="center" mt={4}>
                Não utilizamos nenhuma informação pessoal além {'\n'} do seu e-mail para criação de sua conta
            </Text>

        </Center>
    )
}