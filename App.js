import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SwitchNavMain from './navigation/switchNavMain';


export default function App() {
  return (
    <NavigationContainer>
      <SwitchNavMain/>
    </NavigationContainer>
  );
}