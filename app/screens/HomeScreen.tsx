import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const transactions = [
  { id: '1', type: 'Gasto', description: 'Cine', amount: -50 },
  { id: '2', type: 'Ingreso', description: 'Salario', amount: 500 },
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Saldo General */}
      <View style={styles.header}>
        <Text style={styles.balanceText}>Saldo General: $450</Text>
        <Text style={styles.incomeExpense}>Último Ingreso: $500</Text>
        <Text style={styles.incomeExpense}>Último Gasto: $50</Text>
      </View>

      {/* Lista de transacciones */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={[styles.amount, item.type === 'Gasto' ? styles.expense : styles.income]}>
              ${item.amount}
            </Text>
          </View>
        )}
      />

      {/* Botón flotante */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  incomeExpense: {
    fontSize: 16,
    color: '#555',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  description: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
  },
  income: {
    color: 'green',
  },
  expense: {
    color: 'red',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ea',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 24,
    color: '#fff',
  },
});
