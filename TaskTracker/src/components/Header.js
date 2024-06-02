import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Hello, Devs</Text>
        <Text style={styles.subText}>14 tasks today</Text>
      </View>
      <Image
        style={styles.profileImage}
        source={require('../../assets/profile-picture.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 20,
    },
    headerContainer: {
      marginBottom: 20, // Add margin bottom for spacing between Header and SearchBar
    },
    headerText: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    subText: {
      fontSize: 12,
    },
    profileImage: {
      width: 50,
      height: 52,
      borderRadius: 25,
      backgroundColor: '#FFFFFF'
    },
  });

export default Header;
