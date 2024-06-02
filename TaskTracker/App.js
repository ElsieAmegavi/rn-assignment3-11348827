import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';


const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
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