import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Dimensions} from 'react-native';
import Styles from '../Styles';


export default function Profile(props){
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;


    console.log(props.profile)
    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{ height: 3 }} />
            <View>
                <TouchableOpacity 
                    style={{
                        alignSelf: 'center',
                        width: SCREEN_WIDTH-10,
                        height: SCREEN_HEIGHT-300, 
                        borderRadius: 30,
                        borderWidth: 1,
                        margin: 5 
                    }}
                ><Text style={Styles.cenText}>Images Here</Text></TouchableOpacity>
            </View>

            <View style={{  flex: 1, 
                            flexDirection: 'row',
                        }}>
                <View>
                    <Text>
                        <Text style={{
                                fontSize: 48,
                                margin: 5,
                                marginLeft: 15
                            }}
                        >{props.profile[0].first}</Text>

                        <Text style={{
                                fontSize: 36,
                                margin: 5,
                                marginLeft: 15
                            }}
                        >{props.profile[0].age}</Text>
                    </Text>

                    <Text style={{marginTop:3, marginLeft:20}}>
                        {props.profile[0].education}
                    </Text>

                    <Text style={{marginTop:3, marginLeft:20}}>
                        {props.profile[0].job}
                    </Text>

                    <View style={{
                            flex: 1, 
                            flexWrap: 'wrap',
                            width: SCREEN_WIDTH
                        }}
                    >
                        <Text style={{
                                fontSize: 20,
                                marginTop: 10,
                                marginLeft: 20,
                                marginRight: 20,
                                marginBottom: 20

                            }}
                        >
                            {props.profile[0].about}
                        </Text>
                    </View>
                </View>
                
                <View>
                    
                </View>
            </View>
        </View>
    );
}