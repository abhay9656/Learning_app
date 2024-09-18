import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ChapterList from './ChapterList';
import { Text } from 'react-native-paper';

const Stack = createStackNavigator();

const Chapter = () => {
    return (
        <View style={{flex:1}}>
            <Text>Chapter</Text>
            <Stack.Navigator initialRouteName='list'>
                <Stack.Screen name="list" component={ChapterList} />
            </Stack.Navigator>
        </View>
    )
}

export default Chapter
