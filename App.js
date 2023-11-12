import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen1 from './src/screen1';
import screen2 from './src/screen2';
import screen3 from './src/screen3';
import screen4 from './src/screen4';

export default function App() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screen1" component={screen1} />
        <Stack.Screen name="screen2" component={screen2} />
        <Stack.Screen name="screen3" component={screen3} />
        <Stack.Screen name="screen4" component={screen4} />
      </Stack.Navigator>
      <View>
        
      </View>
    </NavigationContainer>
  );
}


