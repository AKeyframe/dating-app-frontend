import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Services
import { getUser } from './services/userService';
import { getProfile } from './services/profileService';

//Components
import AccountTitle from './components/AccountTitle';

//Pages - Screens
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
import Settings from './pages/Settings';



const AuthStack = createStackNavigator();

export default function App() {
  const [userState, setUserState] = useState({user: getUser()});
  const [profile, setProfile] = useState();
  
    useEffect(async () => {
        if(userState.user){
          console.log('hello')
          let p = await getProfile();
          console.log(p);
          // console.log(getProfile)
              if(!profile){
                  setProfile(p);
              }
        }
    }, [userState]);


  function handleSignupOrLogin(){
      setUserState({user: getUser()});
  } 


  return (
      <NavigationContainer>
        <AuthStack.Navigator>
        <AuthStack.Screen 
            name='Login'
            options={{
              headerTitle: (props) => <AccountTitle {...props} />
              
            }}>
            {props => <Login {...props} 
                        profile={profile}
                        userState={userState}
                        setUserState={setUserState}
                        handleSignupOrLogin={handleSignupOrLogin}
                      />}
            
          </AuthStack.Screen>

          <AuthStack.Screen 
            name='SignUp' 
            component={SignUp} 
            options={{
              headerTitle: (props) => <AccountTitle {...props} />
            }}
          />

          <AuthStack.Screen 
            name='Profile'
            options={{
              headerTitle: (props) => <AccountTitle {...props} />
              
            }}>
            {props => <Profile {...props} profile={profile} />}
            
          </AuthStack.Screen>

          <AuthStack.Screen 
            name='Edit'
            options={{
              headerTitle: (props) => <AccountTitle {...props} />
              
            }}>
            {props => <Edit {...props} profile={profile} />}
            
          </AuthStack.Screen>
          <AuthStack.Screen
            name='Settings'
            component={Settings}
            options={{
              headerTitle: (props) => <AccountTitle {...props} />
            }}
          />


        </AuthStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

