import { StatusBar } from 'expo-status-bar';

// import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text, VStack, Center } from 'native-base';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

// importar  componentes
import { Loading } from './src/components/loading';
import { SignIn } from './src/screens/SignIn';
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })



  return (
    <NativeBaseProvider theme={THEME}>
  
        {
          fontsLoaded ? <SignIn /> : <Loading/>
        }
      
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
