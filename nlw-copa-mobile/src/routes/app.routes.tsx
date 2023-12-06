import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { New } from '../screens/New';
import { Pools } from '../screens/Pools';

// desestruturar a importação
const {Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return(
    
    <Navigator>
        <Screen
        
        name='new' 
        component={New}
        
        
        />


<Screen
        
        name='Pools' 
        component={Pools}
        
        
        />
    </Navigator>
    
    
        )
}
