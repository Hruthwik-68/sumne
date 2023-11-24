import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './screens/Register';
import Home from './screens/Home';
import Login from './screens/Login';

import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf')
  })

  if (fontsLoaded)
    return (
      <NavigationContainer>
        <StatusBar />

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;
