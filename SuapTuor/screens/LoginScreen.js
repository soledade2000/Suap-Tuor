import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Login"
            onPress={() => {
              // Lógica de autenticação aqui
              // Se a autenticação for bem-sucedida, navegue para a tela Home
              navigation.navigate('Home');
            }}
            color="Black"  // Texto em branco
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 100,  // Altere este valor para ajustar a posição vertical
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 20,      // Altere este valor para ajustar a altura dos campos
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    padding: 20,      // Altere este valor para ajustar a altura do botão
    backgroundColor: 'black',  // Fundo preto
  },
});

export default LoginScreen;
