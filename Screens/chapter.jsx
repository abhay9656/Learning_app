import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

// Dummy data for learning modules
const modules = [
  { id: 1, title: 'Introduction to React Native', description: 'Learn the basics of React Native.' },
  { id: 2, title: 'React Native Components', description: 'Understand how to create and style components.' },
  { id: 3, title: 'React Native Navigation', description: 'Learn how to navigate between screens.' },
  { id: 4, title: 'State and Props', description: 'Deep dive into state and props in React Native.' },
  { id: 5, title: 'APIs and Data Fetching', description: 'Fetch and display data from APIs.' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Learning App</Text>
      </View>

      {/* Module List */}
      <ScrollView contentContainerStyle={styles.moduleList}>
        {modules.map((module) => (
          <TouchableOpacity key={module.id} style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>{module.title}</Text>
            <Text style={styles.moduleDescription}>{module.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
