"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
const native_base_1 = require("native-base"); //center é centralizar o texto e o spinner aniamaçãomde loading
function Loading() {
    return (<native_base_1.Center flex={1} bg='gray.900'> //flex de 1 para garantir que ele vai utilizar todo o espaço da tela 
    //flex de 1 para garantir que ele vai utilizar todo o espaço da tela 
            <native_base_1.Spinner color='yellow.500'>

            </native_base_1.Spinner>
        </native_base_1.Center>);
}
exports.Loading = Loading;
