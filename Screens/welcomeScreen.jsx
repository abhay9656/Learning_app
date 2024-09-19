import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WelcomeScreen = ({ visible, setVisible }) => {
    return (
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={styles.container}>
                {/* Back Arrow */}
                <Icon  name="arrow-back" size={24} color="purple" style={styles.backIcon} />

                {/* Illustration */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/learn.png')} // Add your illustration image here
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Online learning platform</Text>
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    </Text>
                </View>

                {/* Start Learning Button */}
                <TouchableOpacity style={styles.button}>
                    <Text onPress={() => setVisible(false)} style={styles.buttonText}>Start Learning</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3ecff',
        padding: 16,
    },
    backIcon: {
        marginTop: 10,
        marginLeft: 10,
    },
    imageContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 2,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6c49da',
        textAlign: 'center',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#7b7b7b',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#6c49da',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
