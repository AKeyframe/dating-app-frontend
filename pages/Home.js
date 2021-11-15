import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './Main';
import Matches from './Matches';
import Profile from './Profile';
import styles from "../Styles";

const Tabs = createBottomTabNavigator();

export default function Home(props){

    console.log(props);

    return(
        <Tabs.Navigator>
            <Tabs.Screen name='Main' children={()=>
                <Main />} />
            <Tabs.Screen name='Matches' children={() =>
                <Matches />} />
            <Tabs.Screen name='Profile' children={() => 
                <Profile 
                    userState={props.userState}
                    setUserState={props.setUserState}
                    handleLogout={props.handleLogout} 
                />
            }/>
        </Tabs.Navigator>

        
    );
}