import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

import Styles, {bgColor, bgSecColor, hiColor, textColor} from '../Styles';

export default function Person(props){
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;

    return(
        <View style={{flex: 1, backgroundColor: bgColor}}>
            <View>
                <TouchableOpacity 
                    style={{
                        alignSelf: 'center',
                        width: SCREEN_WIDTH-10,
                        height: SCREEN_HEIGHT-300, 
                        borderRadius: 30,
                        borderColor: hiColor,
                        backgroundColor: bgSecColor,
                        margin: 5,
                        marginTop: 15 
                    }}
                ><Text style={Styles.cenText}>Images Here</Text></TouchableOpacity>
            </View>

            <View style={{
                    flex: -1,
                    flexDirection: 'row',
                    
                }}
            >
                <View style={{  flex: -1, 
                                flexDirection: 'row',
                                
                            }}>
                    <View style={{flex: -1}}>
                        <Text>
                            <Text style={{
                                    fontSize: 48,
                                    margin: 5,
                                    marginLeft: 15,
                                    color: textColor
                                }}
                            >{props.person.first}</Text>

                            <Text style={{
                                    fontSize: 36,
                                    margin: 5,
                                    marginLeft: 15,
                                    color: textColor
                                }}
                            >{props.person.age}</Text>
                        </Text>
                    </View>
                </View>
                <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyConetent: 'center',
                    }}
                >   
                    <View style={{
                            flex: -1, 
                            justifyConetent: 'center',
                            justifySelf: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',

                        }}
                    >
                        
                            <Text style={{color: textColor, marginTop:16}}>
                                {props.person.education}
                            </Text>
                       
                        
                       
                            <Text style={{color: textColor, marginTop:3}}>
                                {props.person.job}
                            </Text>
                        
                    </View>
                    
                </View>
            </View>

            <View style={{
                    flex: -1, 
                    justifyConetent: 'center', 
                    alignItems: 'center',
                    marginTop: 10,
                }}
            >
                <View style={{
                        flex: -1, 
                        justifySelf: 'center',
                        alignSelf: 'center',
                        
                    }}
                >
                    <View style={{
                            flex: -1, 
                            flexWrap: 'wrap',
                                
                            width: SCREEN_WIDTH-20,
                            borderRadius: 20,
                            marginTop: 5,
                            marginBottom: 20,
                            backgroundColor: bgSecColor
                        }}
                    >
                        <Text style={{
                                fontSize: 20,
                                marginTop: 10,
                                marginLeft: 20,
                                marginRight: 20,
                                marginBottom: 10,
                                color: textColor

                            }}
                        >
                            {props.person.about}
                        </Text>
                    </View>
                </View>
            </View>
                
            <View>
                    
            </View>
        </View>
        
    );
}