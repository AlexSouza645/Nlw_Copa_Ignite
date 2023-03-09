"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_base_1 = require("native-base");
// /* View style={styles.container} */ alignItems='center' justifyContent='center'
const theme_1 = require("./src/styles/theme");
const roboto_1 = require("@expo-google-fonts/roboto");
// importação do componente de loading
const loading_1 = require("./src/components/loading");
const Signin_1 = require("./src/screens/Signin");
function App() {
    // saolvar num array para saber se a fonte foi carregada
    const [fonstsLoaded] = (0, roboto_1.useFonts)({ Roboto_400Regular: roboto_1.Roboto_400Regular, Roboto_500Medium: roboto_1.Roboto_500Medium, Roboto_700Bold: roboto_1.Roboto_700Bold });
    return (<native_base_1.NativeBaseProvider theme={theme_1.THEME}>
      <native_base_1.Center flex={1} bgColor="gray.600">
        <native_base_1.StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>
        {/* barStyle = barra de status ficar visivel
         */}
           
     
    {fonstsLoaded ? <Signin_1.SignIn /> : <loading_1.Loading /> //se a fonte esta disponivel ela é exibida caso contrario mostra  o loading 
        }
 
        
       
      </native_base_1.Center>
    </native_base_1.NativeBaseProvider>);
}
exports.default = App;
