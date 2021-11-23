import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import { textColor } from '../Styles';

import Styles from '../Styles';

export default function Chat(props){
    return(
        <View style={Styles.container}>
            <Text style={{color: textColor, fontSize: 26}}>Chat not yet implemented</Text>
        </View>
    );
}