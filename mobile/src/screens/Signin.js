"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
const native_base_1 = require("native-base");
function SignIn() {
    return (<native_base_1.Center flex={1} bgColor="gray.600">
      <native_base_1.Text color="warning.400" fontSize={24} fontFamily="heading">
        {" "}
        Signin 
      </native_base_1.Text>
    </native_base_1.Center>);
}
exports.SignIn = SignIn;
