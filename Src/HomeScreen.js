import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { foodItems } from './foodItems';
import { addItem } from './cartReducer';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isItemAdded = (id) => {
    return cart.some((cartItem) => cartItem.id === id);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Hotel🦋Redux 🥞</Text>

        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartText}>Cart ({cart.length})</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const added = isItemAdded(item.id);

          return (
            <View style={styles.card}>

              <View style={styles.left}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />

                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.foodName}>{item.name}</Text>
                  <Text style={styles.price}>₹ {item.price}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={[
                  styles.addBtn,
                  added && styles.addedBtn,
                ]}
                disabled={added}
                onPress={() => dispatch(addItem(item))}
              >
                <Text style={styles.addText}>
                  {added ? 'ADDED' : 'ADD'}
                </Text>
              </TouchableOpacity>

            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  cartBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20
  },

  cartText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  image: {
    width: 80,
    height: 80,
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    borderColor:'green',
    borderWidth:2
  },

  foodName: {
    fontSize: 18,
    fontWeight: '700',
  },

  price: {
    color: 'grey',
    marginTop: 4,
  },

  addBtn: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20
  },

  addedBtn: {
    backgroundColor: '#aaa',
    
  },

  addText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
