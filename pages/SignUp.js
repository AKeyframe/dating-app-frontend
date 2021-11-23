import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { createProfile } from '../services/profileService';

import { signup } from '../services/userService'

import Styles, {bgColor, bgSecColor, hiColor, textColor} from '../Styles';

export default function SignUp(props){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState();

    const handleChangeEmail = text => {
        setEmail(text);
    };

    const handleChangeName = text => {
        setName(text);
    };

    const handleChangePass = text => {
        setPass(text);
    };

    async function handleSignUp(){
        try {
            //Create the User
            await signup({email: email, username: name, password: pass});
            //Create the Users Profile
            await createProfile();
            //Log them in
            props.handleSignupOrLogin();
            
            
        } catch (err) {
            // Invalid user data (probably duplicate email)
            setError(err.message);
        }

        props.navigation.pop();
    }

    return(
        <SafeAreaView style={Styles.container}>
            <View style={{
                    margin: 10,
                }}
            >
                <Text style={{
                        color: textColor,
                        fontSize: 26,
                        textAlign: 'center',
                        margin: 3,
                    }}
                >Email</Text>

                <TextInput 
                    style={Styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={handleChangeEmail}
                    accessibilityLabel='Email Input'
                    returnKeyType='next'
                />
            </View>
            
            <View style={{
                    margin: 10,
                }}
            >
                <Text style={{
                        color: textColor,
                        fontSize: 26,
                        textAlign: 'center',
                        margin: 3,
                    }}
                >Username</Text>

                <TextInput 
                    style={Styles.input}
                    placeholder='Username'
                    value={name}
                    onChangeText={handleChangeName}
                    accessibilityLabel='User Name Input'
                    returnKeyType='next'
                />
            </View>

            <View style={{
                    margin: 10,
                }}
            >
                <Text style={{
                        color: textColor,
                        fontSize: 26,
                        textAlign: 'center',
                        margin: 3,
                    }}
                >Password</Text>

                <TextInput
                    style={Styles.input}
                    placeholder='Password'
                    value={pass}
                    onChangeText={handleChangePass}
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    accessibilityLabel='password'
                    returnKeyType='next'

                />
            </View>

            <View style={{
                        flex: -1,
                        alignItems: 'center',
                        marginVertical: 15,
                    }}
                ><TouchableOpacity
                        onPress={handleSignUp}
                        style={{
                            backgroundColor: bgSecColor,
                            borderWidth: 1,
                            borderRadius: 20,
                            borderColor: hiColor,
                            width: 175,
                            marginTop: 10,
                        }}
                    
                    >
                        <Text style={{
                                color: textColor,
                                fontSize: 28,
                                textAlign: 'center', 
                                padding: 5
                            }}
                        >Sign Up</Text>

                    </TouchableOpacity>
                </View>
            
        </SafeAreaView>
    );
}
