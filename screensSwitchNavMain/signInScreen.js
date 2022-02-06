import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/appHeader";
import styles from "../stuff/styles";

export default class SignInScreen extends React.Component {
  constructor()
  {
    super()

    this.state = {
      emailInput: "",
      passwordInput: "",
      errorMessage: ""
    }
  }

  render() {
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={styles.sav} />

          <AppHeader title="Sign In"/>

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
          value={this.state.emailInput}
          onChangeText={(emailInput) => {this.setState({emailInput})}}
          />

          <TextInput
          style={styles.optionTextInput}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.passwordInput}
          onChangeText={(passwordInput) => {this.setState({passwordInput})}}
          />

          <TouchableOpacity style={styles.optionButton} onPress={() => {this.props.navigation.navigate("HomeTabs")}}>
            <Text style={styles.optionButtonText}>
              Sign In
            </Text>
          </TouchableOpacity>
          
          {
            (
              () => this.state.errorMessage != ""
              ?
              <Text style={styles.errorText}>
                {this.state.errorMessage}
              </Text>
              :
              undefined
            )()
          }

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
