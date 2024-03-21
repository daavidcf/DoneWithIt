import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao DoneWithIt, um app de chat online!</Text>
      <StatusBar style="auto" />
      <Text> </Text>

      <Button icon="" mode="contained" onPress={() => console.log('Button pressed!')}>
      Iniciar Chat
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
