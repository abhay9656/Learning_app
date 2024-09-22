import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, useRef, useState } from 'react-native';
// import { useVideoPlayer, VideoView } from 'expo-video';
// import Video from 'react-native-video';
// import { useVideoPlayer, VideoView } from 'expo-video';
// import { useEffect, useRef, useState } from 'react';
// import { PixelRatio, StyleSheet, View, Button } from 'react-native';

const videoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const SimplePage = ({ route, navigation }) => {

    const { chapterData } = route.params;

    // const ref = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(true);
    // const player = useVideoPlayer(videoSource, player => {
    //     player.loop = true;
    //     player.play();
    // });

    // useEffect(() => {
    //     const subscription = player.addListener('playingChange', isPlaying => {
    //         setIsPlaying(isPlaying);
    //     });

    //     return () => {
    //         subscription.remove();
    //     };
    // }, [player]);

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>{chapterData.title}</Text>
            </View>
            {/* <View style={styles.contentContainer}>
                <VideoView
                    ref={ref}
                    style={styles.video}
                    player={player}
                    allowsFullscreen
                    allowsPictureInPicture
                />
                <View style={styles.controlsContainer}>
                    <Button
                        title={isPlaying ? 'Pause' : 'Play'}
                        onPress={() => {
                            if (isPlaying) {
                                player.pause();
                            } else {
                                player.play();
                            }
                            setIsPlaying(!isPlaying);
                        }}
                    />
                </View>
            </View> */}
            {/* Profile Picture Section */}
            <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder image
                />
                <Text style={styles.profileName}>{chapterData.description}</Text>
            </View>

            {/* Content Section */}
            <ScrollView style={styles.contentContainer}>
                <Text style={styles.contentText}>
                    {chapterData.overview}
                </Text>
                <Text style={styles.text}>{chapterData.type}</Text>
                <Text style={styles.contentText}>{chapterData.data}</Text>
                <Text style={styles.contentText}>{chapterData.example}</Text>

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
   text:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:10,
   }
});

export default SimplePage;
