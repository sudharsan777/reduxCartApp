import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from './cartReducer';

export default function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let subtotal = 0;
  cart.forEach((i) => (subtotal += i.price * i.quantity));

  const discount = subtotal >= 300 ? subtotal * 0.1 : 0;
  const delivery = subtotal >= 500 ? 0 : 40;
  const total = subtotal - discount + delivery;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>Cart is empty 😕</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text>₹ {item.price}</Text>
            </View>

            <View style={styles.qtyBox}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => dispatch(minus(item.id))}
              >
                <Text style={styles.qtyText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{item.quantity}</Text>

              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => dispatch(plus(item.id))}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {cart.length > 0 && (
        <View style={styles.summary}>
          <Row label="Subtotal" value={`₹ ${subtotal}`} />
          <Row label="Discount" value={`₹ ${discount}`} />
          <Row label="Delivery" value={`₹ ${delivery}`} />
          <Row label="Total" value={`₹ ${total}`} bold />
        </View>
      )}
    </View>
  );
}

const Row = ({ label, value, bold }) => (
  <View style={styles.row}>
    <Text style={[styles.text, bold && styles.bold]}>{label}</Text>
    <Text style={[styles.text, bold && styles.bold]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  empty: { textAlign: 'center', marginTop: 40 },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: { fontWeight: '600', fontSize: 16 },
  qtyBox: { flexDirection: 'row', alignItems: 'center'  },
  qtyBtn: {
    backgroundColor: '#000',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: { color: '#fff', fontSize: 18 },
  qty: { marginHorizontal: 10, fontWeight: 'bold' },
  summary: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  text: { fontSize: 14 },
  bold: { fontWeight: 'bold', fontSize: 16 },
});
