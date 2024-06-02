import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import CategorySection from './src/components/CategorySection';
import OngoingTasksSection from './src/components/OngoingTasksSection';



const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <CategorySection />
      <OngoingTasksSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});

export default App;