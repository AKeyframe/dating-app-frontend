import React, { useState } from 'react';
import {SafeAreaView,View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles, {bgColor, hiColor, textColor, SCREEN_HEIGHT, SCREEN_WIDTH} from '../Styles';

export default function AccountTitle(props){

    return(
        <Text style={{
                color: textColor,
                backgroundColor: bgColor,
                textAlign: 'center'
            }}
        >Dating App Name</Text>
              
              
           
        
    );
}