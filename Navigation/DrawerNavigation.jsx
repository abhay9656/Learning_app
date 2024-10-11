import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from '../Screens/Home';
import { Avatar, IconButton } from 'react-native-paper';
import Chapter from '../Screens/chapters';
import WelcomeScreen from '../Screens/welcomeScreen';
import login from '../Screens/login';
import signup from '../Screens/signup';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../FirebaseConfigure';


const auth = getAuth(app);

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



const Drawer = createDrawerNavigator();

const Navigator = () => {

  const [userlogedin, setuserlogedin] = useState(false)

  const navigation = useNavigation();

  return <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} options={{
      headerRight: () => !userlogedin ? <IconButton
        icon={'account-circle'}
        onPress={() => { navigation.navigate('Login'); }} />
        :
        <IconButton
          icon={'logout'}
          onPress={() => { setuserlogedin(false); }} />
    }} />
    <Drawer.Screen name="chapter" component={Chapter} />
    <Drawer.Screen name="Login" component={login} />
    <Drawer.Screen name="Signup" component={signup} />
  </Drawer.Navigator>


}

export default function App() {

  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = React.useState(true);
 
  // const openLogin = () => {
  //   setLoginOpen(true);
  //   setSignupOpen(false);
  // }

  // const openSignup = () => {
  //   setSignupOpen(true);
  //   setLoginOpen(false);
  // }
  return (
    <NavigationContainer>
      <WelcomeScreen visible={showWelcomeScreen} setVisible={setShowWelcomeScreen} />
      <Navigator />
    </NavigationContainer>
  );
}