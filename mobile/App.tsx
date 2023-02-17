import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider, Text, Center } from "native-base";
// /* View style={styles.container} */ alignItems='center' justifyContent='center'
import {THEME} from './src/styles/theme';
import{useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold}  from '@expo-google-fonts/roboto'

// importação do componente de loading
import { Loading } from "./src/components/loading";

export default function App() {
  // saolvar num array para saber se a fonte foi carregada
const [fonstsLoaded]=useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold}); 


  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.600">
        <Loading/>
       
      </Center>
    </NativeBaseProvider>
  );
}
{/* <Text color="warning.400" fontSize={24}> */}
          // Hello World!
        // </Text> <StatusBar style="auto" />