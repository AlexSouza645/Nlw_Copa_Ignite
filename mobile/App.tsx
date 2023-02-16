import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider,Text,  Center } from "native-base";
// /* View style={styles.container} */ alignItems='center' justifyContent='center'
export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="indigo.700">
        <Text color="yellow " fontSize={24}>
          Hello World!
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}
