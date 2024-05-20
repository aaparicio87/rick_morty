import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../../screens/Auth';
import { TabNavigation } from '../TabNavigation/TabNavigation';
import { useAuth } from '../../hooks/useAuth';


const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {

  const auth = useAuth()

  return (
    <RootStack.Navigator>
      {
        auth.token === null ?
          (
            <>
              <RootStack.Screen
                name='Login'
                options={{
                  headerShown: false
                }}
                component={LoginScreen}
              />
              <RootStack.Screen
                name='SignUp'
                options={{
                  headerShown: false
                }}
                component={RegisterScreen}
              />
            </>
          ) : (
            <>
              <RootStack.Screen
                name="BottomTab"
                component={TabNavigation}
                options={{
                  headerShown: false
                }}
              />
            </>
          )
      }
    </RootStack.Navigator>
  )
}