import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

const Home = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuIcon}>
              {/* This is where your menu icon would go */}
              <Text style={styles.menuText}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Learing</Text>
            <Avatar.Text size={30} label="AB" />
          </View>

    
          <View style={styles.grid}>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your icon
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
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      cardText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#444',
      },
    });

export default Home