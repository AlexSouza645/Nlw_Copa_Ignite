import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { SignIn } from '../screens/SignIn'
import { useAuth } from '../hooks/useAuth'
import { Box } from 'native-base'


import {SignIn} from '../screens/SignIn'

export function Routes() {

<<<<<<< Updated upstream
  const { user } = useAuth()
  return (
    <Box flex={1} bg="gray.900">
      <NavigationContainer>

        {
          user.name ? <AppRoutes /> : <SignIn />
        }
=======
         <SignIn>
            
         </SignIn>
>>>>>>> Stashed changes

      </NavigationContainer>
    </Box>
  )





}


