import React, { useState } from 'react';
import {SafeAreaView,View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';

export default function AccountTitle(props){

    return(
        <SafeAreaView>
            <View style={Styles.navFlex}>
                <View style={{width: 10}}/>
                <View style={Styles.container}>
                    <Text style={Styles.cenText}>Dating App Name</Text>
                </View>
                <View style={{width: 10}}/>
            </View>
        </SafeAreaView>
    );
}