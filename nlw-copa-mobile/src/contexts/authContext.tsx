import { createContext } from "react";
interface UserProps {
    name: string;
    avatarUrl: string;

}

// tipar a interface 
interface AuthProviderProps {
    children: React.ReactNode;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps)

//criar uyma função que prove o contexto criado

export function AuthContextProvider({ children }:AuthProviderProps) {


    async function signIn() {
    }
    return (
        <AuthContext.Provider value={{
            signIn, user: { name: "Lucas", avatarUrl: "https://github.com/AlexSouza645.png" }




        }}>

            {children}
        </AuthContext.Provider>)

}
