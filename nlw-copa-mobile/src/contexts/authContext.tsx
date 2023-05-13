import { createContext, useState, ReactNode, useEffect } from "react";
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
    // salvar o estado do usuario
    const [user, setUser] = useState<UserProps>({} as UserProps)

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
            await promptAsync()


        } catch (error) {
            console.log(error)
            throw error

        } finally { setIsUserLoading(false) }
    }

    async function signInWithGoogle(access_token: string) {
        console.log('token de autenticação ===>', access_token)
    }


    useEffect(() => {
        if (response?.type === 'success' && response.authentication?.accessToken) {
            signInWithGoogle(response.authentication.accessToken)
        
         }
    }, [response])


    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            // user: { name: "Lucas", avatarUrl: "https://github.com/AlexSouza645.png" }
            user



        }}>

            {children}
        </AuthContext.Provider>)

}
