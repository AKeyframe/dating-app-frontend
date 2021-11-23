import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Image,
  Button, TouchableOpacity,
  Dimensions, Animated, Panresponder
                                      } from 'react-native';
import Styles, { bgColor, bgSecColor, hiColor, textColor} from '../Styles';

//Services
import { dislikeUser, likeUser } from '../services/profileService';

//temp
import one from '../assets/testing-images/poly-3295856_1280.png';
import two from '../assets/testing-images/lowPoly-art-img.jpg';
import three from '../assets/testing-images/poly-3295856_1280.png';
import four from '../assets/testing-images/polygon-polygon-art-low-poly-art-deer-wallpaper-preview.jpg';
import five from '../assets/testing-images/low-poly-elefant-low-poly-art.jpg';



export default function Main(props) {

  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;


  const images = [
    { id: '1', uri: one },
    { id: '2', uri: two },
    { id: '3', uri: three },
    { id: '4', uri: four },
    { id: '5', uri: five },
  ]
 
  function handleLike() {
    likeUser(props.profile[0]._id, props.results[(props.results.length-1)]._id)
    props.setResults(prev => {
      prev.pop();
      return [...prev];
    });
  }

  function handleDislike() {
    dislikeUser(props.profile[0]._id, props.results[(props.results.length-1)]._id)
    props.setResults(prev => {
      prev.pop();
      return [...prev];
    });
  }

  function toThisProfile(key){
    props.setPerson(key);
    props.navigation.push('Person');
    
  }
 
  function renderFilterProfiles() {
    if(props.results){
      if(props.results.length >= 1){
        return props.results.map((prof, i) => {
           
            return(<Animated.View
              key={i}
              
              style={[
                {
                  height: SCREEN_HEIGHT - 205,
                  width: SCREEN_WIDTH,
                  position: 'absolute',
                  padding: 5,
                  backgroundColor: bgColor
                  
                }
              ]}
            >
              <View  style={{
                        flex: 1,
                        flexDirection: 'column-reverse',
                        backgroundColor: bgSecColor,
                        borderRadius: 20,
                        marginBottom: 40,
                        
                      }}
              >
                  <TouchableOpacity onPress={() => toThisProfile(prof)}>
                      <Text>
                        <Text style={{
                                color: textColor,
                                fontSize: 48,
                                marginHorizontal: 20,
                                
                              }}
                        >{prof.first}</Text>

                        <Text style={{
                                color: textColor,
                                fontSize: 36,
                                
                              }}
                        >{prof.age}</Text>
                      </Text>
                  </TouchableOpacity>
              </View>
              {/*For when I have images working on mongodb */}
              {/* <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20,
                  
                }}
                source={prof.uri}
              
              /> */}
            </Animated.View>
          );
        });
      } else {
        return(
          <View style={{flex: -1, 
                        alignItems: 'center',
                        height: SCREEN_HEIGHT - 205,
                        width: SCREEN_WIDTH,
                        alignSelf: 'center',
                        position: 'absolute',
                        margin: 5,
                        borderRadius: 20,
                        backgroundColor: bgSecColor
                      }}>

              <Text style={{
                        color: textColor,
                        textAlign: 'center',
                        marginVertical: 'auto',
                        fontSize: 24
                }}
              >No one meets your criteria</Text>
          </View>
        );
      }    
    }  
  }


  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <View style={{ height: 3 }} />
      <View style={{ flex: 1}}>
          {renderFilterProfiles()}
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH,
        height: 100,
        alignItems: 'space-evenly',
        marginTop: SCREEN_HEIGHT-375
      }}>
        <View style={{
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 40 
        }}>
          <TouchableOpacity
            onPress={handleDislike}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              margin: 3,
              backgroundColor: bgSecColor
              // backgroundColor: '#DC143C'
            }}><Text style={{
                      textAlign: 'center',
                      marginVertical: 'auto',
                      color: textColor,
                      fontSize: 24
                    }}
            >Pass</Text></TouchableOpacity>

        </View>
        <View style={{
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 40 
        }}>
          <TouchableOpacity
            onPress={handleLike}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              margin: 3,
              backgroundColor: bgSecColor
              // backgroundColor: '#32CD32'
            }}>
              <Text style={{
                      textAlign: 'center',
                      marginVertical: 'auto',
                      color: hiColor,
                      fontSize: 24
                    }}
              >Like</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
}