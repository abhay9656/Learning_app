import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient'; // To create background gradient

const SimplePage = ({ route }) => {
    const { chapterData } = route.params;

    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
        <LinearGradient
            // Adding a gradient background
            colors={['#F4F7FC', '#D9E4F5']}
            style={styles.gradientContainer}
        >
            <View style={styles.container}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>{chapterData.title}</Text>
                </View>

                {/* Video Section */}
                <View style={styles.videoContainer}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{ uri: chapterData.video }} // Add your video URL here
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>

                {/* Content Section */}
                <ScrollView style={styles.contentScroll}>
                    <View style={styles.card}>
                        <Text style={styles.contentTitle}>{chapterData.description}</Text>
                        <Text style={styles.contentText}>{chapterData.overview}</Text>

                        
                        <Text style={styles.text}>{chapterData.type}</Text>

                    
                        <Text style={styles.contentText}>{chapterData.data}</Text>

                        <Text style={styles.contentText}>{chapterData.example}</Text>
                    </View>
                </ScrollView>

                {/* Footer with Button */}
               
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        backgroundColor: '#2F4DFA',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 3, // For shadow on Android
        shadowColor: '#000', // For shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    videoContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
    },
    video: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        
    },
    contentScroll: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    contentTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E3D58',
        marginBottom: 5,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#4A4A4A',
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4A4A4A',
    },
    button: {
        backgroundColor: '#1E3D58',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 20,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default SimplePage;
