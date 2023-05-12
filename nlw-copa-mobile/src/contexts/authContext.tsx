import { createContext, useState } from "react";
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession()

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
    isUserLoading: boolean;
    signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps)

//criar uyma função que prove o contexto criado

export function AuthContextProvider({ children }: AuthProviderProps) {

    const [isUserLoading, setIsUserLoading] = useState(false)

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '985538430534-iqgglat783uljucu5l2h84q6m1sqak7n.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })


    // console.log(AuthSession.makeRedirectUri({ useProxy: true }))

    async function signIn() {
        // console.log('vamos logar')

        try {
            setIsUserLoading(true)

        } catch (error) {

        } finally { setIsUserLoading(false) }
    }
    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
             user: { name: "Lucas", avatarUrl: "https://github.com/AlexSouza645.png" }




        }}>

            {children}
        </AuthContext.Provider>)

}
