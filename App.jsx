import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import DrawerNavigation from './Navigation/DrawerNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      
      <DrawerNavigation/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBD2FE',
  },
});
