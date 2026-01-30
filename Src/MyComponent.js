import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE, 
} from './ActionType';

const MyComponent = () => {
  const { loading, data, error } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
 console.log(data)
  const fetchData = async () => {
    dispatch({ type: FETCH_REQUEST });

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const result = await response.json();
      console.log(result)

      dispatch({
        type: FETCH_SUCCESS,
        payload: result,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAILURE,
        payload: err.message,
      });
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 ,justifyContent:'flex-end',alignItems:'flex-end'}}>
      <Button title="Fetch Post" onPress={()=>fetchData()} />

      {loading && <ActivityIndicator size="large"  />}

      {error && <Text style={{textAlign:'center',fontSize:20,color:'red'}}>{error}</Text>}

      {data && (
        <FlatList
          data={data}
          keyExtractor={(item,index) => item.id.toString()}
          renderItem={({ item ,index }) => (
            <Text style={{fontSize:15,fontWeight:'bold'}}>{index+1}.{item.title}</Text>
          )}
        />
      )}
    </View>
  );
};

export default MyComponent;
