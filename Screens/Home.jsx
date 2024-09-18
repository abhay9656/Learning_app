import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuIcon}>
              {/* This is where your menu icon would go */}
              <Text style={styles.menuText}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Learing</Text>
            <Image
              style={styles.profileIcon}
              source={{ uri: 'https://via.placeholder.com/40' }} // Placeholder for profile icon
            />
          </View>
          <Text style={styles.lastUpdate}>Last Update 25 Feb 2020</Text>
    
          <View style={styles.grid}>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your icon
              />
              <Text style={styles.cardText}>My Account</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your icon
              />
              <Text style={styles.cardText}>Inventory</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your icon
              />
              <Text style={styles.cardText}>Search Mechanic</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your icon
              />
              <Text style={styles.cardText}>Request</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your icon
              />
              <Text style={styles.cardText}>Analytics</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your icon
              />
              <Text style={styles.cardText}>Contact Us</Text>
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
      profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      lastUpdate: {
        marginVertical: 20,
        color: '#888',
        fontSize: 14,
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
      icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
      },
      cardText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#444',
      },
    });

export default Home