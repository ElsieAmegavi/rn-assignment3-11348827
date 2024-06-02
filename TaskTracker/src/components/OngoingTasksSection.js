import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ongoingTasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Laundry',
  'Mowing',
  'Software Engineering',
  'Shopping',
  'Budgetting',
  'Cleaning',
  'Get nails done',
  'Get Hair done',
  'Get Spa treatment',
  'Babysitting',
  'Read a Book',
  'Write some pages of my novel',
];

const OngoingTasksSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ongoing Tasks</Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {ongoingTasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  task: {
    padding: 10,
    height: 120,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#FBF9F7',
    borderColor: '#E8D1BA',
    justifyContent: 'center'
  },
  taskText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10, 
  },
});

export default OngoingTasksSection;
