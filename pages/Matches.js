import React, { useState, useEffect } from 'react';
import {View, ScrollView, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles, { bgColor, bgSecColor, hiColor, SCREEN_HEIGHT, textColor} from '../Styles';

import { getYourMatches } from '../services/profileService';

export default function Matches(props){

    const [matches, setMatches] = useState();
    const [updateMatches, setUpdateMatches] = useState(0);



    useEffect(async () => {
        if(!matches){
            setMatches(await getYourMatches(props.profile[0]._id));
        } else {
            setMatches(prev => [...prev]);
        }
    }, [updateMatches]);

    function toChat(){
        props.navigation.push('Chat');
    }

    function toProfile(i){
        props.setPerson(matches[i].match)
        props.navigation.push('Person');
    }


    function displayMatches(){    
        if(matches.length !== 0){
            return matches.map((m, i) => {
                return(
                    <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                            backgroundColor: bgSecColor,
                            borderRadius: 20,
                            margin: 10,
                            marginHorizontal: 10
                        }}
                        key={i}
                    >
                        <TouchableOpacity style={{
                                flex: -1,
                                justifyContent: 'center',
                                alignItems: 'center',

                                height: 75,
                                width: 75,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: textColor,
                                padding: 3,
                                margin: 10,
                                marginRight: 22,
                            }}
                            onPress={() => toProfile(i)}
                        >
                            <Text style={{color: textColor}}>Thumb</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                                flex: -1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                            onPress={() => toChat()}
                        >
                            <Text>
                                <Text style={{
                                        color: textColor,
                                        fontSize: 28,
                                        padding: 3,
                                        marginHorizontal: 5
                                    }}
                                >{m.match.first}</Text>

                                <Text style={{
                                        color: textColor,
                                        fontSize: 24,
                                        padding: 3,
                                        marginHorizontal: 5
                                    }}
                                >{m.match.age}</Text>
                            </Text>

                            <Text style={{
                                    color: textColor,
                                    padding: 3,
                                    marginHorizontal: 5
                                }}
                            >Chat not yet implemented</Text>
                        </TouchableOpacity>

                    </View>
                );
            });

        } else {
            return(
                <View style={Styles.container}
                >
                    <Text style={{
                            color: textColor,
                            fontSize: 26,
                            marginTop: SCREEN_HEIGHT/4
                        }}
                    >No matches yet</Text>
                </View>
            );
        }
           
              
                    
               
            
    }
    

    return matches ? 
        
        <View style={{flex: 1, backgroundColor: bgColor}}>
            <View style={{marginVertical: 20}}>
                <Text style={{
                        color: textColor,
                        fontSize: 20,
                        marginLeft: 15,
                        marginBottom: 30
                    }}
                >Recent: </Text>
                <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                            color: textColor,
                            fontSize: 22
                        }}
                    >Chat not yet implemented</Text>
                </View>
            </View>
            <ScrollView style={{marginVertical: 20}}>

                <Text style={{
                        color: textColor,
                        fontSize: 20,
                        marginLeft: 15
                    }}
                >Matches: </Text>
                {displayMatches()}
            </ScrollView>
            
        </View>
        :

        <View style={Styles.container}>
            <Text style={{
                    color: textColor,
                    fontSize: 26
                }}
            >Retriving your matches...</Text>
        </View>
}