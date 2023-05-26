import { VStack } from "native-base";
import { Button } from "../components/Button";



export function Pools() {


    return (
        <VStack flex={1}>
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor='gray.600'>
            <Button title="BUSCAR BOLÃO POR CÓDIGO "/>
            </VStack>

        </VStack>
    )
}