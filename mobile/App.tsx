// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet,  View } from 'react-native';
import { NativeBaseProvider, StatusBar } from 'native-base';
 
// importar temas
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/loading';
import { Signin } from './src/screens/signin';
import { transparentize } from 'native-base/lib/typescript/theme/tools';



export default function App() {

  // saolvar num array para saber se a fonte foi carregada
  const [fonstsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });





  return (
    <NativeBaseProvider theme={THEME}>
     <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
        {
          fonstsLoaded ?<Signin/>: <Loading />
          // se a fonte esta carregada aparece tela de signin se nao mostra o loading
        }


        
     
    </NativeBaseProvider>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     color: '#FFF',
//     fontSize: 32
//   }
// });
