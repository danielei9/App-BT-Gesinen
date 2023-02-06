import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Icons:
// https://reactnativeelements.com/docs/1.2.0/icon#available-icon-sets

import { getNavigationTheme, screen } from "../utils";

import { useTheme } from "../hooks";

export function AppNavigation() {

  // Con toggleTheme cambias de estado el tema  y com darkMode sabes si esta en ON / OFF de aqui pasar por prop a donde quieras
  const { theme, darkMode, toggleTheme } = useTheme();
  const MyTheme = getNavigationTheme(theme)

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name={screen.app.tab} component={TabNavigation} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
