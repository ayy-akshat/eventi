import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SwitchNavMain from './navigation/switchNavMain';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';


export default function App() {
  return (
    <NavigationContainer>
      <SwitchNavMain/>
    </NavigationContainer>
  );
}

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);