import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import Header from './components/header';
import {uuid} from 'uuidv4';

const defaultItems = [
  {id: uuid(), text: 'Milk'},
  {id: uuid(), text: 'Eggs'},
  {id: uuid(), text: 'Bread'},
  {id: uuid(), text: 'Juice'},
];

const App = () => {
  const [items, setItems] = useState(defaultItems);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;