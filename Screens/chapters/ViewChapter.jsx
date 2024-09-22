import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const SimplePage = ({ route }) => {
    const { chapterData } = route.params;

    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>{chapterData.title}</Text>
            </View>

            {/* Video Section */}
            <View style={styles.contentContainer}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{ uri: chapterData.video }} // Pass the video URL here
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>

            {/* Profile Picture Section */}
            {/* <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder image
                />
                <Text style={styles.profileName}>{chapterData.description}</Text>
            </View> */}

            {/* Content Section */}
            <ScrollView style={styles.contentContainer}>
                <Text style={styles.text}>{chapterData.description}</Text>
                <Text style={styles.contentText}>{chapterData.overview}</Text>
                <Text style={styles.text}>{chapterData.type}</Text>
                <Text style={styles.contentText}>{chapterData.data}</Text>
                <Text style={styles.contentText}>{chapterData.example}</Text>
            </ScrollView>
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
        backgroundColor: '#2F4DFA',
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
   
    contentContainer: {
        flex: 1,
        
    },
    video: {
        width: '100%',
        height: 200,
       
    },
    contentText: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default SimplePage;
