import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { MainNavigation } from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/state/store";



export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    </GluestackUIProvider>
  );
}
