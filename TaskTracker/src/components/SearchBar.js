import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons name="search-outline" size={25} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>
      <TouchableOpacity>
        <Image
          source={require('../../assets/filter-button.png')} // Replace with your settings icon image path
          style={styles.settingsIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#FBF9F7',
    borderColor: '#FBF9F7',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 14
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: '#FBF9F7',
    color: '#424242',
    borderRadius: 14,
  },
  settingsIcon: {
    width: 50,
    height: 48,
  },
});

export default SearchBar;
