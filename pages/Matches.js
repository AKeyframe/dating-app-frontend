import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';


export default function Matches(props){
    return(
        <View style={Styles.container}>
            <Text style={{fontSize: 26}}>No matches yet</Text>
        </View>
    );
}