import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ChapterList from './ChapterList';
import { Text } from 'react-native-paper';
import ViewChapter from './ViewChapter';

const Stack = createStackNavigator();

const Chapter = () => {
    return (
        <View style={{flex:1}}>
            <Stack.Navigator >
                <Stack.Screen name="list" component={ChapterList} />
                <Stack.Screen name="view" component={ViewChapter} options={{header: ()=>null}} />
            </Stack.Navigator>
        </View>
    )
}

export default Chapter
