"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSidePops = void 0;
const react_1 = __importDefault(require("react"));
function Home(props) {
    return <h1>Contagem de Pools : {props.count}</h1>;
}
exports.default = Home;
const getServerSidePops = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("http://localhost:3333/pools/count");
    const data = yield response.json();
    //.then(response => response.json())//retorna em formato json
    //.then(data =>{
    console.log(data); //busca os dados e verifica se os dados foram buscados corretamente
    return {
        props: {
            count: data.count,
        },
    };
});
exports.getServerSidePops = getServerSidePops;
