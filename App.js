import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './screens/Clock';
export default function App() {
  return (  
      <Clock/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDA521',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
