import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../../screens/Auth';
import { TabNavigation } from '../TabNavigation/TabNavigation';


const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name='Login'
        component={LoginScreen}
      />
      <RootStack.Screen
        name='SignUp'
        component={RegisterScreen}
      />
      <RootStack.Screen
        name="BottomTab"
        component={TabNavigation}
      />
    </RootStack.Navigator>
  )
}