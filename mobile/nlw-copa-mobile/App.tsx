import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, VStack, Center } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor={'fuchsia.400'}>
        <Text style={styles.title}>Hello World </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
  }



});
