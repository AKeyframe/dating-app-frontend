import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';

import { getProfile } from '../services/profileService';

export default function Matches(props){

   

    const [matches, setMatches] = useState();

    useEffect(async () => {
        if(!matches){
            setMatches(await getMatches());
        }
    }, []);

    async function getMatches(){


    }


    return(
        <View style={Styles.container}>
            <Text style={{fontSize: 26}}>No matches yet</Text>
        </View>
    );
}