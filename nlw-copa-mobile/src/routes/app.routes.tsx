import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { New } from '../screens/New';
import { Pools } from '../screens/Pools';
import { Find } from '../screens/Find';
import { PlusCircle, SoccerBall } from 'phosphor-react-native'
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

// desestruturar a importação
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    const { colors, sizes } = useTheme()
    const size = sizes[6]
    return (

        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: colors.yellow[500],
            tabBarInactiveTintColor: colors.gray[300],
            // estilização da barra de navegacao
            tabBarStyle: {
                position: 'absolute',
                height: sizes[12],
                borderTopWidth: 0,
                backgroundColor: colors.gray[800]
            },
            // estilizar os itens da barra
            tabBarItemStyle: {
                position: 'relative',
                top: Platform.OS === 'android' ? -10 : 0
            }
        }}>
            <Screen

                name='new'
                component={New}
                options={{
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={size}
                    />,
                    tabBarLabel: 'Novo Bolão '
                }}


            />


            <Screen

                name='Pools'
                component={Pools}
                options={{
                    tabBarIcon: () => <SoccerBall
                        size={size} />,
                    tabBarLabel: 'Meus Bolões '
                }}

            />

            <Screen

                name='Find'
                component={Find}
                options={{ tabBarButton:( )=> null
                  
                }}

            />
        </Navigator>


    )
}
