import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';

//Services
import { getWhoLikedYou, updateProfile } from '../services/profileService';
import { getProfile } from '../services/profileService';

export default function Likes(props){
    
    

    const [likes, setLikes] = useState();

    useEffect(async () => {
        if(!likes){
            setLikes(await getLikes());
        }
    }, [props.profile]);

    async function getLikes(){
        let data = await getWhoLikedYou(props.profile[0]._id, props.profile[0].interactions.likedBy);
        let l = await data.interactions.likedBy;
        console.log('your likes')
        console.log(l);
        return l;
    }

    const a = () =>{
        console.log(likes);
    }

    return(
        <View style={Styles.container}>
            <Text style={{fontSize: 26}}>No more likes</Text>
            <Button onPress={a}>Hi</Button>
        </View>
    );
}