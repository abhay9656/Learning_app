import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewChapter from './ViewChapter';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../../FirebaseConfigure';

const db = getFirestore(app);

const Stack = createStackNavigator();



// Dummy data for learning modules
// const modules = [
//   { id: 1, title: 'Introduction to React Native', description: 'Learn the basics of React Native.' },
//   { id: 2, title: 'React Native Components', description: 'Understand how to create and style components.' },
//   { id: 3, title: 'React Native Navigation', description: 'Learn how to navigate between screens.' },
//   { id: 4, title: 'State and Props', description: 'Deep dive into state and props in React Native.' },
//   { id: 5, title: 'APIs and Data Fetching', description: 'Fetch and display data from APIs.' },
// ];

export default function ChapterList({navigation}) {

  const [chapterList, setChapterList] = useState([])
  const [Refreshing, setRefreshing] = useState(true)


  const loadChapter = async ()=>{
     const ref = collection(db,'chapters');
     setRefreshing(true)
     const snapshot = await getDocs(ref);
     const data = snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    }).sort((a, b) => a.title.localeCompare(b.title) );
    console.log(data);
    setChapterList(data)
    setRefreshing(false)
  }

  useEffect(()=>{
    loadChapter()
  },[])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      {/* Module List */}
      <ScrollView contentContainerStyle={styles.moduleList}>
        {chapterList.map((module) => (
          <TouchableOpacity key={module.id} style={styles.moduleCard} onPress={()=> {
            navigation.navigate('view', {chapterData: module});
          }}>
            <Text style={styles.moduleTitle}>{module.title}</Text>
            <Text style={styles.moduleDescription}>{module.description}</Text>
          </TouchableOpacity>
          
        ))}
      </ScrollView>
      {/* <View style={{flex:1}}>
            <Stack.Navigator >
                <Stack.Screen name="detail" component={ViewChapter} />
            </Stack.Navigator>
        </View> */}
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  moduleList: {
    padding: 20,
  },
  moduleCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  moduleDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
