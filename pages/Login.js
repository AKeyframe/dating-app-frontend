import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';

import {getUser, login, logout} from '../services/userService';


import Home from './Home';

import styles from '../Styles';

export default function Login(props){
    //getUser()
    const [userState, setUserState] = useState({user: getUser()});

    function handleSignupOrLogin(){
        setUserState({user: getUser()});
      }
      
      function handleLogout(){
        logout(); //userService
        setUserState({user: null});
        setName('');
        setPass('');
    }

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const handleChangeName = text => {
        setName(text);
    };

    const handleChangePass = text => {
        setPass(text);
    };

    async function handleLogIn(){
        console.log('handle login')
        try {
            await login({username: name, pw: pass});
            handleSignupOrLogin();

        } catch (err) {
            // Use a modal or toast in your apps instead of alert
            alert('Invalid Credentials!');
        }
    }

    function handleLogout(){
        logout();
        setUserState({user: null});
        setName('');
        setPass('');
    }

    function handleSignUp(){
        props.navigation.push('SignUp', {handleSignupOrLogin: handleSignupOrLogin()});
    }
    
    let authCheck = userState.user ?
      
            <Home 
                userState={userState}
                setUserState={setUserState}
                handleLogout={handleLogout}
            />
        
        :
       
            <SafeAreaView style={styles.container}>
                <Text>Username</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Username'
                    value={name}
                    onChangeText={handleChangeName}
                    accessibilityLabel='User Name Input'
                    returnKeyType='next'
                /> 

                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={pass}
                    onChangeText={handleChangePass}
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    accessibilityLabel='password'
                    returnKeyType='go'

                />
                <View style={styles.button}>
                    <Button
                        
                        onPress={handleLogIn}
                        
                        title='Log In'
                        accessibilityLabel='Log In Button'
                    />
                </View>
                <View style={styles.inline}>
                    <Text>Don't have an accounct? </Text>
                    <TouchableOpacity
                            onPress={handleSignUp}
                            accessibilityLabel='Sign Up Button'
                        > Sign up.</TouchableOpacity>
                </View>
            </SafeAreaView>

       
    return(authCheck);
}


