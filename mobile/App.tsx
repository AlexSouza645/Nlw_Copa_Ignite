

import { NativeBaseProvider, Center, StatusBar} from "native-base";
// /* View style={styles.container} */ alignItems='center' justifyContent='center'
import {THEME} from './src/styles/theme';
import{useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold}  from '@expo-google-fonts/roboto'

// importação do componente de loading
import { Loading } from "./src/components/loading";

import { SignIn } from "./src/screens/Signin";
import { transparentize } from "native-base/lib/typescript/theme/tools";

export default function App() {
  // saolvar num array para saber se a fonte foi carregada
const [fonstsLoaded]=useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold}); 


  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.600">
        <StatusBar barStyle="light-content" backgroundColor= 'transparent' translucent/>
        {/* barStyle = barra de status ficar visivel
         */}
           
     
    {
      fonstsLoaded ?  <SignIn/>: <Loading/> //se a fonte esta disponivel ela é exibida caso contrario mostra  o loading 
    }
 
        
       
      </Center>
    </NativeBaseProvider>
  );
}
