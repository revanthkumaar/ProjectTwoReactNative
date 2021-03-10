import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

export default App = () => {
  const [data, setData] = useState([]);
  console.log(data);

  //Making an API call/HTTP call
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{flex: 1, padding: 50}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 50,
            color: 'green',
            textAlign: 'center',
            paddingBottom: 10,
          }}>
          {' '}
          {data.title}{' '}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'red',
            textAlign: 'center',
            paddingBottom: 10,
          }}>
          Articles:
        </Text>

        <FlatList
          data={data.articles}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => <Text>{item.id + '.' + item.title}</Text>}
        />
      </View>
    </View>
  );
};
