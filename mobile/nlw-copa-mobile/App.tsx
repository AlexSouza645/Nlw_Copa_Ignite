import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider,Text, VStack, Center } from 'native-base';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor={'gray.600'}>
        <Text color="white" fontSize={28}>Hello World </Text>
        <StatusBar style="auto" />
      </Center>
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
