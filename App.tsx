import {View, Text, FlatList, ViewToken, StyleSheet} from 'react-native';
import React from 'react';
import ListItem from './src/components/ListItem';
import {useSharedValue} from 'react-native-reanimated';

const data = new Array(50).fill(0).map((_, index) => ({id: index}));

const App = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{paddingTop: 40}}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          console.log(viewableItems);
          viewableItems.value = vItems;
        }}
        renderItem={({item}) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15233d',
  },
});
