import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';



export default function Account(props){
    console.log(props);
    function toProfile(){
        console.log(props);
        props.navigation.push('Profile', );//{profile: props.profile}
    
        //to pass props
        //props.navigation.push('SignUp', {handleSignupOrLogin: handleSignupOrLogin()});
    }
    
    function toEdit(){
        props.navigation.push('Edit');
    }

    function toSettings(){
        props.navigation.push('Settings');
    }



    return(
        <View style={{
                flex: 1,
                backgroundColor: '#fff' 
        
        }}>
            <View style={{
                    width: 200,
                    height: 200,
                    borderWidth:1,
                    borderRadius: 25,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    backgroundColor: '#fff'
                }}
            >
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{textAlign: 'center'}}>Thumbnail</Text>
                </View>
            </View>
      
            <View style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                

                <TouchableOpacity 
                    style={Styles.toButton}
                    onPress={toProfile} > 
                        <Text style={Styles.buttonText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={Styles.toButton}
                    onPress={toEdit}> 
                        <Text style={Styles.buttonText}>Edit Profie</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={Styles.toButton}
                    onPress={toSettings}> 
                    <Text style={Styles.buttonText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={props.handleLogout} style={Styles.toButton}> 
                    <Text style={Styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}