import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, Dimensions, TouchableOpacity} from 'react-native';
import Styles from '../Styles';

//Services
import { getWhoLikedYou, updateProfile } from '../services/profileService';
import { likeUser, dislikeUser } from '../services/profileService';

export default function Likes(props){
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;

    const [likes, setLikes] = useState();

    useEffect(async () => {
        if(!likes){
            setLikes(await getLikes());
        }
    }, [likes]);



    async function getLikes(){
        let data = await getWhoLikedYou(props.profile[0]._id, props.profile[0].interactions.likedBy);
        let l = await data.interactions.likedBy;
        return l;
    }

    function toProfile(i){
        console.log('/////////////////////')
        console.log(likes[i]);
        props.setPerson(likes[i])
        props.navigation.push('Person');
        
    }

    function handleDislike(i){
        dislikeUser(props.profile[0]._id, likes[i]._id);
        setLikes(prev => prev.splice(i, 1));
        console.log(likes)
        Likes(props)
    }

    function handleLike(i){
        likeUser(props.profile[0]._id, likes[i]._id)
        setLikes(prev => prev.splice(i, 1));
        
    }


    function displayLikes(){
        if(likes){
            if(likes.length != 0){
           
                return likes.map((person, i) => {
                    return (
                        <View style={{
                                flex: -1,
                                alignItems: 'center',
                                margin: 20
                            }}
                            key={i}
                        >
                            <View style={{
                                    flex: -1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 125,
                                    height: 125,
                                    borderWidth: 1,
                                    borderRadius: 20
                                }}
                            >
                                <Text>Thumbnail</Text>
                            </View>
                            <View style={{
                                
                                }}
                            >
                                <TouchableOpacity onPress={() => toProfile(i)}>
                                    <Text>
                                        <Text style={{
                                                fontSize: 28
                                            }}
                                        >{person.first} </Text>
                                        <Text style={{
                                                fontSize: 24
                                            }}
                                        >{person.age}</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                    flex: -1,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 10
                                }}
                            >
                                <TouchableOpacity 
                                    style={{
                                        marginHorizontal: 10,
                                        padding: 3,
                                        borderWidth: 1, 
                                        borderRadius: 10
                                    }}
                                    onPress={() => handleDislike(i)}
                                >
                                    <Text style={{fontSize: 22}}>Pass</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                    style={{
                                        marginHorizontal: 10,
                                        padding: 3,
                                        borderWidth: 1, 
                                        borderRadius: 10
                                    }}
                                    onPress={() => handleLike(i)}
                                >
                                    <Text style={{fontSize: 22}}>Like</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    );
                });
            } else {
                return(
                    <View style={Styles.container}>
                        <Text style={{
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
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{
                    flex: -1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'space-evenly',
                    justifyContent: 'space-evenly',
                    backgroundColor: '#fff'
                }}
            >
                {displayLikes()}
            </View>
        </View>
    );
}