import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import Video from 'react-native-video';




const SimplePage = ({ route, navigation }) => {

    const { chapterData } = route.params;

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>{chapterData.title}</Text>
            </View>
            {/* <Video
                source={{ uri: '"https://firebasestorage.googleapis.com/v0/b/learning-react-native-ebe34.appspot.com/o/chapters%2Fanimated_medium20210407-4113-pfmdng.mp4?alt=media&token=96c7ff91-0291-45a1-9c1e-686ff41b7514"' }} // Can be a local or remote URL
                style={styles.video}
                controls={true} // Show media controls
                resizeMode="contain" // Adjust the video to fit the view
            /> */}
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
