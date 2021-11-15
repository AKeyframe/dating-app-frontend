import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import {StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages - Screens
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import {getUser, logout} from './services/tokenService'

const AuthStack = createStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={Login} />
        <AuthStack.Screen name='SignUp' component={SignUp} />
      </AuthStack.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Login />

    // </SafeAreaView>
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

