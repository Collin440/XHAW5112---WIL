import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#003366', // Deep blue
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              source={require('../assets/images/etn-logo.jpg')} 
              style={{
                width: 150,
                height: 40,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </>
  );
}

