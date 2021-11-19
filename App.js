import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Services
import { getUser } from './services/userService';
import { getFilteredProfiles, getProfile } from './services/profileService';

//Components
import AccountTitle from './components/AccountTitle';

//Pages - Screens
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Person from './pages/Person';
import Edit from './pages/Edit';
import Settings from './pages/Settings';



const AuthStack = createStackNavigator();

export default function App() {
  const [userState, setUserState] = useState({user: getUser()});
  const [profile, setProfile] = useState();
  const [results, setResults] = useState();
  const [header, setHeader] = useState(checkHeader());

    useEffect(async () => {
        //if the user is logged in
        if(userState.user){
          //Get the Users profile and set it to state
          let p = await getProfile();          
          let r = await getFilteredProfiles(p[0]._id);
          if(!profile){
            setProfile(p);
          }
          if(!results){
            setResults(r);
            

          }
        }
    }, [userState]);


  function handleSignupOrLogin(){
      setUserState({user: getUser()});
  } 

  function checkHeader(){
    if(userState.user){
      return false;
    }
    return true;
  }

  return (
      <NavigationContainer>
        <AuthStack.Navigator>
        <AuthStack.Screen 
            name='Login'
            options={{
              headerShown: header,
              headerTitle: (props) => <AccountTitle {...props} />
              
            }}>
            {props => <Login {...props} 
                        userState={userState}
                        setUserState={setUserState}
                        profile={profile}
                        setProfile={setProfile}
                        results={results}
                        setResults={setResults}
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
            name='Person'
            options={{
              headerTitle: (props) => <AccountTitle {...props} />
              
            }}>
            {props => <Person {...props} />}
            
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
            options={{
              headerTitle: (props) => <AccountTitle {...props} />
              
            }}>
            {props => <Settings {...props} 
                        profile={profile} 
                        setProfile={setProfile}/>}
            
          </AuthStack.Screen>


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

