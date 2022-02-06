import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/appHeader";
import styles from "../stuff/styles";

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={styles.sav} />

          <AppHeader title="Register"/>

          <Image
          source={require('../assets/images/peach.png')}
          style={{
              width: 240,
              height: 135
          }}
          />

          <TextInput
          style={styles.optionTextInput}
          placeholder="Email"
          />

          <TextInput
          style={styles.optionTextInput}
          placeholder="Password"
          secureTextEntry={true}
          />

          <TextInput
          style={styles.optionTextInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
          />

          <TouchableOpacity style={styles.optionButton} onPress={() => {this.props.navigation.navigate("HomeTabs")}}>
            <Text style={styles.optionButtonText}>
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subOptionButton} onPress={() => {this.props.navigation.navigate("StartScreen")}}>
            <Text style={styles.subOptionButtonText}>
              Back
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }
}
