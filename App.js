import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import Header from './components/header';
import ListItem from './components/list-item';
import AddItem from './components/add-item';

import {uuid} from 'uuidv4';

const defaultItems = [
  {id: uuid(), text: 'Milk'},
  {id: uuid(), text: 'Eggs'},
  {id: uuid(), text: 'Bread'},
  {id: uuid(), text: 'Juice'},
];

const App = () => {
  const [items, setItems] = useState(defaultItems);

  const deleteItem = (id) =>
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

  const addItem = (text) => {
    const newItem = {
      id: uuid(),
      text
    };

    setItems((prevItems) => prevItems.push(newItem));
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem

      />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem 
            item={item} 
            deleteItem={deleteItem}        
          />
        )}
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