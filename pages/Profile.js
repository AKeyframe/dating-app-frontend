import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';


export default function Profile(props){
    console.log(props.profile)
    return(
        <View style={Styles.container}>
            <Text>Profile Page</Text>
            <Text>{props.profile[0].user}</Text>
        </View>
    );
}