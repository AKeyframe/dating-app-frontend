import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';

import { getUser, login, logout} from '../services/userService';

import Home from './Home';

import styles, { bgColor, bgSecColor, hiColor, textColor } from '../Styles';

export default function Login(props){
    function handleLogout(){
        logout(); //userService
        props.setUserState({user: null});
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
        try {
            await login({username: name, pw: pass});
            props.handleSignupOrLogin();

        } catch (err) {
            // Use a modal or toast in your apps instead of alert
            alert('Invalid Credentials!');
        }
    }

    function handleLogout(){
        logout();
        props.setUserState({user: null});
        props.setProfile(null);
        props.setResults(null);
        setName('');
        setPass('');
    }

    function handleSignUp(){
        props.navigation.push('SignUp', {handleSignupOrLogin: props.handleSignupOrLogin()});
    }
    
    let authCheck = props.userState.user ?
      
            <Home 
                userState={props.userState}
                setUserState={props.setUserState}
                profile={props.profile}
                results={props.results}
                setResults={props.setResults}
                navigation={props.navigation}
                person={props.person}
                setPerson={props.setPerson}
                setUpdate={props.setUpdate}
                handleLogout={handleLogout}
            />
        
        :
       
            <SafeAreaView style={styles.container}>
                <Text style={{
                        color: textColor,
                        fontSize: 26,
                        margin: 3,
                    }}
                >Username</Text>

                <TextInput 
                    style={styles.input}
                    placeholder='Username'
                    value={name}
                    onChangeText={handleChangeName}
                    accessibilityLabel='User Name Input'
                    returnKeyType='next'
                /> 

                <Text style={{
                        color: textColor,
                        fontSize: 26,
                        margin: 3,
                        marginTop: 20,
                    }}
                >Password</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={pass}
                    onChangeText={handleChangePass}
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    accessibilityLabel='password'
                    returnKeyType='next'
                    onSubmitEditing={handleLogIn}

                />
                <View style={{
                        flex: -1,
                        alignItems: 'center',
                        marginVertical: 15,
                        marginTop: 25,
                    }}
                ><TouchableOpacity
                        onPress={handleLogIn}
                        style={{
                            backgroundColor: bgSecColor,
                            borderWidth: 1,
                            borderRadius: 20,
                            borderColor: hiColor,
                            width: 125,
                            height: 50,
                            marginTop: 10,
                        }}
                    
                    >
                        <Text style={{
                                color: textColor,
                                fontSize: 28,
                                textAlign: 'center', 
                                padding: 5
                            }}
                        >Login</Text>

                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.inline}>
                        <Text style={{
                                color: textColor,
                                
                            }}
                        >Don't have an accounct? </Text>
                        <TouchableOpacity
                                onPress={handleSignUp}
                                accessibilityLabel='Sign Up Button'
                            ><Text style={{
                                    color: textColor,
                                    
                                }}
                            >Sign up.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

       
    return(authCheck);
}


