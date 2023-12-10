import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Box} from 'native-base';
import Grid from './components/Grid';


export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <Grid/>
      
      
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
