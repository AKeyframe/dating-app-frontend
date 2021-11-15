import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';


export default function Main(props){
    console.log('==============')
    console.log(props);
    console.log('==============')
    return(
        <View style={Styles.container}>
            <Text>Main Page</Text>
        </View>
    );
}