import React, { useEffect, useState } from 'react';
import {View, ScrollView, StyleSheet, Text, TextInput, Button, Dimensions, TouchableOpacity} from 'react-native';

import Styles, { bgColor, bgSecColor, hiColor, textColor} from '../Styles';

//Services
import { getWhoLikedYou, updateProfile } from '../services/profileService';
import { likeUser, dislikeUser } from '../services/profileService';

export default function Likes(props){
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;

    const [likes, setLikes] = useState();
    const [updateLikes, setUpdateLikes] = useState(0);

    useEffect(async () => {
        if(!likes){
            setLikes(await getLikes());
        } else {
            setLikes(prev => [...prev]);
        }
    }, [updateLikes]);



    async function getLikes(){
        let data = await getWhoLikedYou(props.profile[0]._id, props.profile[0].interactions.likedBy);
        let l = await data.interactions.likedBy;
        return l;
    }

    function toProfile(i){
        props.setPerson(likes[i])
        props.navigation.push('Person');
        
    }

    function handleDislike(i){
        dislikeUser(props.profile[0]._id, likes[i]._id);
        setLikes(prev => prev.filter((user, iter) =>{
            if(i === iter){
                return false;
            } else {
                return user;
            }
        }));
        
        setUpdateLikes(prev => prev+1);
    }

    function handleLike(i){
        likeUser(props.profile[0]._id, likes[i]._id)
        setLikes(prev => prev.filter((user, iter) =>{
            if(i === iter){
                return false;
            } else {
                return user;
            }
        }));
        
        setUpdateLikes(prev => prev+1);
        
    }


    function displayLikes(){
        if(likes){
            if(likes.length != 0){
           
                return likes.map((person, i) => {
                    return (
                        <View style={{
                                flex: 1,
                                alignItems: 'center',
                                margin: 20
                            }}
                            key={i}
                        >
                            <TouchableOpacity onPress={() => toProfile(i)}>
                                <View style={{
                                        flex: -1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 125,
                                        height: 125,
                                        
                                        borderRadius: 20,
                                        backgroundColor: bgSecColor,
                                    }}
                                >
                                    <Text style={{
                                            color: textColor
                                        }}
                                    >Thumbnail</Text>
                                </View>
                                <View style={{
                                    
                                    }}
                                >
                                
                                    <Text style={{textAlign: 'center'}}>
                                        <Text style={{
                                                color: textColor,
                                                fontSize: 28
                                            }}
                                        >{person.first} </Text>

                                        <Text style={{
                                                color: textColor,
                                                fontSize: 24
                                            }}
                                        >{person.age}</Text>
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                    flex: -1,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 10
                                }}
                            >
                                <TouchableOpacity 
                                    style={{
                                        width: 60,
                                        marginHorizontal: 10,
                                        padding: 3,
                                        backgroundColor: bgSecColor,
                                        borderRadius: 10
                                    }}
                                    onPress={() => handleDislike(i)}
                                >
                                    <Text style={{
                                            color: textColor,
                                            fontSize: 22,
                                            textAlign: 'center'
                                        }}
                                    >Pass</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                    style={{
                                        width: 60,
                                        marginHorizontal: 10,
                                        padding: 3,
                                        backgroundColor: bgSecColor,
                                        borderRadius: 10
                                    }}
                                    onPress={() => handleLike(i)}
                                >
                                    <Text style={{
                                            color: hiColor,
                                            fontSize: 22,
                                            textAlign: 'center'
                                        }}
                                    >Like</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    );
                });
            } else {
                return(
                    <View style={Styles.container}>
                        <Text style={{
                                color: textColor,
                                fontSize: 26,
                                marginTop: SCREEN_HEIGHT/2.3,
                            }}
                        >No more likes</Text>
                    </View>
                )
            }
        } 
        
    }

   

    return (
        <View style={{flex: 1, backgroundColor: bgColor}}>
            <ScrollView style={{
                    flex: 1,
                    
                    
                    backgroundColor: bgColor
                }}
                contentContainerStyle={{
                    
                    flexWrap: 'wrap',
                    alignItems: 'space-evenly',
                    justifyContent: 'space-evenly',
                }}
            >
                {displayLikes()}
            </ScrollView>
        </View>
    );
}