// HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Header from './Header';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Header />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Crie sua conta!"
              onPress={() => navigation.navigate('Register')}
              color="black"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Nosso Mapa!"
              onPress={() => navigation.navigate('MapScreen')}
              color="black"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('Login')}
              color="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
  },
});

export default HomeScreen;
