import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles, {bgColor, bgSecColor, hiColor, textColor} from '../Styles';



export default function Account(props){
    
    function toProfile(){
        props.navigation.push('Profile', );//{profile: props.profile}
    
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
                backgroundColor: bgColor 
        
        }}>
            <View style={{
                    width: 200,
                    height: 200,
                    borderRadius: 25,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    backgroundColor: bgSecColor
                }}
            >
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: textColor, textAlign: 'center'}}>Thumbnail</Text>
                </View>
            </View>
      
            <View style={{
                    flex: -1, 
                    alignItems: 'center',
                    justifyContent: 'center',
                   
                    marginHorizontal: 60,
                    marginTop: 20
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
                    <Text style={{
                            fontSize: 32,
                            color: hiColor
                        }}
                    >Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}