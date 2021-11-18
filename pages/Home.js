import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './Main';
import Matches from './Matches';
import Account from './Account';

import styles from "../Styles";
import { getProfile } from '../services/profileService';

const Tabs = createBottomTabNavigator();

export default function Home(props){

    

    return(
        <Tabs.Navigator >
            <Tabs.Screen 
                name='Main'
                options={{
                    headerShown: false
                }}  
                children={()=> <Main />} 
            />

            <Tabs.Screen 
                name='Matches'
                options={{
                    headerShown: false
                }} 
                children={() => <Matches />} 
            />
            
            <Tabs.Screen 
                name='Account' 
                options={{
                    headerShown: false
                }}
                children={() => 
                <Account 
                    // profile={props.profile}
                    // setProfile={setProfile}
                    navigation={props.navigation}
                    userState={props.userState}
                    setUserState={props.setUserState}
                    handleLogout={props.handleLogout} 
                />
            }/>
        </Tabs.Navigator>

        
    );
}