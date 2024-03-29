import { VStack, Icon } from "native-base";
import { Button } from "../components/button";
import { Header } from "../components/Header";
import { Octicons } from '@expo/vector-icons';//importação do icone de lupa
import { useNavigation } from "@react-navigation/native";



export function Pools() {

    const navigation = useNavigation()
    return (
        <VStack flex={1} bg="gray.900">
            <Header title="Meus Bolões" />
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor='gray.600' pb={4} mb={4}>
                <Button
                    title="BUSCAR BOLÃO POR CÓDIGO "
                    leftIcon={<Icon as={Octicons} name="search" color='black' size="md" />}
                    onPress={() => navigation.navigate('Find')} />
            </VStack>

        </VStack>
    )
} 