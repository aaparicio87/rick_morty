import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { EpisodesScreen, HomeScreen } from "../../screens/Home";

type PropIcontab = {
    color: string,
    focused: boolean,
    size: number,
    route: RouteProp<BottomTabNavigatorParamList, keyof BottomTabNavigatorParamList>
}

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const TabNavigation = () => {

    const handleTabIcon = ({ color, focused, size, route }: PropIcontab): React.ReactNode => {
        let iconName: any;

        if (route.name === 'Home') {
            iconName = focused
                ? 'home'
                : 'home-outline';
        } else if (route.name === 'Episodes') {
            iconName = focused ? 'easel' : 'easel-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => (
                {
                    headerShown: false,
                    tabBarIcon: ({ color, focused, size }) => handleTabIcon({ color, focused, size, route })
                }
            )}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Episodes"
                component={EpisodesScreen}
            />


        </Tab.Navigator>
    )
}