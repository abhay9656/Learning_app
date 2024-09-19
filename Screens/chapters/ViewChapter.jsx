import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';




const SimplePage = () => {



    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Introduction to javaScript</Text>
            </View>

            {/* Profile Picture Section */}
            <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder image
                />
                <Text style={styles.profileName}>Intoduction</Text>
            </View>

            {/* Content Section */}
            <ScrollView style={styles.contentContainer}>
                <Text style={styles.contentText}>
                    JavaScript is a versatile, high-level programming language primarily used for web development. It enables developers to create dynamic and interactive web pages by manipulating HTML and CSS in real-time. Initially designed to run in browsers, JavaScript can now also be used on the server side with technologies like Node.js. Its event-driven, non-blocking nature makes it highly efficient for handling tasks like user interactions, data fetching, and real-time updates, making it a cornerstone of modern web applications. JavaScript is easy to learn but powerful, supporting object-oriented, imperative, and functional programming styles.
                </Text>
             
            </ScrollView>

            {/* Footer with Button */}
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#A1D6B2',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        marginVertical: 10,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 10,
    },
    footer: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
});

export default SimplePage;
