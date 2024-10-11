import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Learning App</Text>
        
      </View> */}
      <View style={styles.card2}>
        {/* <Text style={{textAlign:'center',color:'#fff',fontSize:24,flex:1,alignItems:'center'}}>Welcome Back!</Text> */}
        <Image
                    source={require('../assets/bg.jpg')} 
                 style={{width:'100%',height:'100%',borderRadius:15}}
                    
                />
      </View>

      <View style={styles.grid}>
          {/* <Text></Text> */}
        <TouchableOpacity style={styles.card} onPress={()=>{
            navigation.navigate('chapter');
        }}>
          <Image
            style={styles.icon}
            source={require('../assets/javaScript.png')} // Ensure this path is correct
          />
          <Text style={styles.cardText}>JavaScript</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginBottom: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 22,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowColor: '#000',
    elevation: 5,
  },
  card2:{
    width: '100%',
    height:'30%',
    backgroundColor: '#2F4DFA',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

export default Home;
