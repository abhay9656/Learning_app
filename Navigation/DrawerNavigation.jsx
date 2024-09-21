import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import { Avatar } from 'react-native-paper';
import Chapter from '../Screens/chapters';
import WelcomeScreen from '../Screens/welcomeScreen';
import login from '../Screens/login';
import signup from '../Screens/signup';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to Home"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = React.useState(false);
  return (
    <NavigationContainer>
      <WelcomeScreen visible={showWelcomeScreen} setVisible={setShowWelcomeScreen} />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{headerRight: () => <Avatar.Text size={30} label="AB" />}} />
        <Drawer.Screen name="chapter" component={Chapter} />
        <Drawer.Screen name="Login" component={login} />
        <Drawer.Screen name="Signup" component={signup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}