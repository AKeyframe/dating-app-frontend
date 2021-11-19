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

export default function Home(homeProps){
    return(
        <Tabs.Navigator >
            <Tabs.Screen 
                name='Main'
                options={{
                    headerShown: false
                }}>

                {props => <Main {...props} 
                            profile={homeProps.profile}
                            results={homeProps.results}
                            setResults={homeProps.setResults}
                            setResults={homeProps.setResults}
                />}
            </Tabs.Screen>


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
                    navigation={homeProps.navigation}
                    userState={homeProps.userState}
                    setUserState={homeProps.setUserState}
                    handleLogout={homeProps.handleLogout} 
                />
            }/>
        </Tabs.Navigator>

        
    );
}