import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { createUser } from '../services/userService'; // Importa tu cliente de API

const CreateUserScreen = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = async () => {
    if (!name || !lastname || !username || !email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const newUser = { name, lastname, username, email, password };
      const createdUser = await createUser(newUser);
      Alert.alert('Éxito', `Usuario ${createdUser.username} creado correctamente`);
      setName('');
      setLastname('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo crear el usuario');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Configuración de StatusBar */}
      <StatusBar
        barStyle="dark-content" // Cambia a "light-content" para texto claro
        backgroundColor="#f5f5f5" // Color de fondo del StatusBar
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.title}>Crear Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              value={lastname}
              onChangeText={setLastname}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.btnContainer}>
              <Button title="Crear Usuario" onPress={handleCreateUser} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  btnContainer: {
    marginTop: 20,
  },
});

export default CreateUserScreen;
