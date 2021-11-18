import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, Button, View, SafeAreaView } from 'react-native';
import { createProfile } from '../services/profileService';

import { signup } from '../services/userService'

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
        <SafeAreaView style={styles.container}>
            <Text>Email</Text>
            <TextInput 
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={handleChangeEmail}
                accessibilityLabel='Email Input'
                returnKeyType='next'
            />

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
                returnKeyType='next'

            />

            <View style={styles.button}>
                <Button
                    
                    onPress={handleSignUp}
                    title='Sign Up'
                    accessibilityLabel='Sign Up Button'
                />
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        width: 100,
        height: 30,
        margin: 10,
        padding: 5,
        borderWidth: 1,
        
    },
    button: {
        width: 100,
        height: 30,
        margin: 10,
        
    }
});