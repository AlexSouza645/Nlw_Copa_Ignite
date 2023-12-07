import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { New } from '../screens/New';
import { Pools } from '../screens/Pools';
import {PlusCircle, SoccerBall} from 'phosphor-react-native'
import { useTheme } from 'native-base';

// desestruturar a importação
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    
    const {colors}= useTheme( )
    return (

        <Navigator screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: colors.yellow[500],
            tabBarInactiveTintColor:colors.gray[300]
        }}>
            <Screen

                name='new'
                component={New}
                options={{
                tabBarIcon:({color}) => <PlusCircle color={color}/>
                }}


            />


            <Screen

                name='Pools'
                component={Pools}
                options={{
                    tabBarIcon:() => <SoccerBall/>
                    }}

            />
        </Navigator>


    )
}
