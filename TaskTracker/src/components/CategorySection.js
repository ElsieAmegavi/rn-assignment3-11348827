import React from 'react';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';

const categories = [
    { id: '1', name: 'Exercise', tasks: 12, image: require('../../assets/young-woman-working-online.png') },
    { id: '2', name: 'Study', tasks: 3, image: require('../../assets/young-woman-working-at-desk.png') },
    { id: '3', name: 'Code', tasks: 12, image: require('../../assets/young-woman-working-online.png') },
    { id: '4', name: 'Cook', tasks: 2, image: require('../../assets/young-woman-working-at-desk.png') },
    { id: '5', name: 'Read a Book', tasks: 10, image: require('../../assets/young-woman-working-online.png') },
    { id: '6', name: 'Meditate', tasks: 9, image: require('../../assets/young-woman-working-at-desk.png') },
    { id: '7', name: 'Quiet Time', tasks: 8, image: require('../../assets/young-woman-working-online.png') },
    { id: '8', name: 'Socialize', tasks: 5, image: require('../../assets/young-woman-working-at-desk.png') },  
    { id: '9', name: 'Write a Novel', tasks: 6, image: require('../../assets/young-woman-working-at-desk.png') },  
    { id: '10', name: 'Do Laundry', tasks: 4, image: require('../../assets/young-woman-working-at-desk.png') },  

];

const CategorySection = () => {
    const renderCategoryItem = ({ item }) => (
      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryName}>{item.name}</Text>
          <Text style={styles.categoryTaskCount}>{`${item.tasks} Tasks`}</Text>
          <Image
            style={styles.categoryImage}
            source={item.image} 
          />
        </View>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryContainer: {
        marginRight: 10,
    },
    categoryBox: {
        width: 186,
        height: 192,
        backgroundColor: '#FBF9F7',
        padding: 10,
        borderRadius: 10,
    },
    categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    categoryTaskCount: {
        fontSize: 12,
        marginBottom: 5,
    },
    categoryImage: {
      width: 151,
      height: 132,
      marginTop: 'auto', 
    },
});
  

export default CategorySection;
