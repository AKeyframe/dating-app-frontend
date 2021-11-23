import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './Main';
import Matches from './Matches';
import Account from './Account';

import Styles, { bgColor, bgSecColor, hiColor, textColor, tabTextColor } from "../Styles";
import { getProfile } from '../services/profileService';
import Likes from './Likes';

const Tabs = createBottomTabNavigator();

export default function Home(homeProps){

    return(
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: hiColor,
                tabBarInactiveTintColor: tabTextColor,
                tabBarActiveBackgroundColor: bgSecColor,
                tabBarInactiveBackgroundColor: bgColor,
                tabBarStyle: [
                  {
                    display: "flex",
                    borderTopColor: hiColor
                  },
                  null
                ]
              }}
            
            
                
          
        >
            <Tabs.Screen 
                name='Main'
                options={{
                    headerShown: false,
                    
                }}>

                {props => <Main {...props} 
                            profile={homeProps.profile}
                            results={homeProps.results}
                            setResults={homeProps.setResults}
                            person={homeProps.person}
                            setPerson={homeProps.setPerson}
                            
                />}
            </Tabs.Screen>

            <Tabs.Screen 
                name='Likes'
                options={{
                    headerShown: false
                }}>

                {props => <Likes {...props} 
                            profile={homeProps.profile}
                            setProfile={homeProps.setProfile}
                            person={homeProps.person}
                            setPerson={homeProps.setPerson}
                            setUpdate={homeProps.setUpdate}
                            navigation={homeProps.navigation}
                />}
            </Tabs.Screen>

            <Tabs.Screen 
                name='Matches'
                options={{
                    headerShown: false
                }}>

                {props => <Matches {...props} 
                            profile={homeProps.profile}
                            setProfile={homeProps.setProfile}
                            person={homeProps.person}
                            setPerson={homeProps.setPerson}
                            navigation={homeProps.navigation}
                />}
            </Tabs.Screen>
            
            <Tabs.Screen 
                name='Account' 
                options={{
                    headerShown: false,
                }}
                children={() => 
                <Account 
                    // profile={props.profile}
                    // setProfile={setProfile}
                    navigation={homeProps.navigation}
                    userState={homeProps.userState}
                    setUserState={homeProps.setUserState}
                    setUpdate={homeProps.setUpdate}
                    handleLogout={homeProps.handleLogout}
                     
                />
            }/>
        </Tabs.Navigator>

        
    );
}