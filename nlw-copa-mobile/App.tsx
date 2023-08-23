// import { StatusBar } from 'expo-status-bar';

// import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

// importar  componentes
import { Loading } from './src/components/Loading';
import { Pools } from './src/screens/Pools';
import { AuthContextProvider } from './src/contexts/authContext';
// import { New} from './src/screens/New';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })



  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar 
        barStyle="light-content" 
        backgroundColor='transparent' 
        translucent />
        {
          fontsLoaded ? <Pools /> : <Loading />
        }
      </AuthContextProvider>
    </NativeBaseProvider>


  );

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     color: '#FFFFFF',
//     fontSize: 24,
//   }



// });
