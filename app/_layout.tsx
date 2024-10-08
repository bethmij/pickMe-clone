import { store } from "@/store";
import { Stack } from "expo-router";
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
export default function RootLayout() {
  return (
    <SafeAreaProvider>  
        <Provider store={store}>
          <Stack>
            <Stack.Screen name="index"  options={{ headerShown: false }} />
            <Stack.Screen name="screens/pages/RideBookingScreen" options={{headerShown:false}}/>
            <Stack.Screen name="screens/pages/MapScreen" options={{headerShown:false}}/>
            <Stack.Screen name="screens/pages/LogIn" options={{headerShown:false}}/>
            <Stack.Screen name="screens/pages/HomeScreen" options={{headerShown:false}}/>
            <Stack.Screen name="screens/pages/LocationView" options={{headerShown:false}}/>
          </Stack>
        </Provider>     
    </SafeAreaProvider>
  );
}
