import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';


export default function Profile(props){
    return(
        <View style={Styles.container}>
            <Text>Profile Page</Text>
            <View style={Styles.button}>
                <Button 
                    onPress={props.handleLogout}
                        
                    title='Sign Out'
                    accessibilityLabel='Sign Out Button'
                />
            </View>
        </View>
    );
}