// SettingsScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Header from './Header';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <View style={styles.button}>
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
              color="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

export default SettingsScreen;
