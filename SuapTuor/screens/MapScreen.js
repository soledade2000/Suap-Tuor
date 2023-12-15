import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de localização não concedida');
        return;
      }
      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
    })();
  }, []);

  const handleCategoryPress = (category) => {
    switch (category) {
      case 'Empresas':
        navigation.navigate('EmpresasScreen');
        break;
      case 'Restaurantes':
        navigation.navigate('RestaurantesScreen');
        break;
      case 'Lazer':
        navigation.navigate('LazerScreen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location ? location.coords.latitude : -23.5505,
            longitude: location ? location.coords.longitude : -46.6333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Sua Localização"
            />
          )}
        </MapView>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.categoryButton}>
          <Button
            title="Empresas"
            onPress={() => handleCategoryPress('Empresas')}
            color="black"
          />
        </View>
        <View style={styles.categoryButton}>
          <Button
            title="Restaurantes"
            onPress={() => handleCategoryPress('Restaurantes')}
            color="black"
          />
        </View>
        <View style={styles.categoryButton}>
          <Button title="Lazer" onPress={() => handleCategoryPress('Lazer')} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  mapContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    flex: 1,
    margin: 5,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default MapScreen;
