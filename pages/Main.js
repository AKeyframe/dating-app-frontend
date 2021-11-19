import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Image,
  Button, TouchableOpacity,
  Dimensions, Animated, Panresponder
                                      } from 'react-native';
import Styles from '../Styles';

//temp
import one from '../assets/testing-images/poly-3295856_1280.png';
import two from '../assets/testing-images/lowPoly-art-img.jpg';
import three from '../assets/testing-images/poly-3295856_1280.png';
import four from '../assets/testing-images/polygon-polygon-art-low-poly-art-deer-wallpaper-preview.jpg';
import five from '../assets/testing-images/low-poly-elefant-low-poly-art.jpg';



export default function Main(props) {
  console.log('main props')
  console.log(props)

  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;


  const images = [
    { id: '1', uri: one },
    { id: '2', uri: two },
    { id: '3', uri: three },
    { id: '4', uri: four },
    { id: '5', uri: five },
  ]
  const [filteredProfiles, setFilteredProfiles] = useState();
  const [like, setLike] = useState([]);
  const [dislike, setDislike] = useState([]);

  function handleLike() {

  }

  function handleDislike() {

  }

  function toThisProfile(){
    console.log('hi')
    props.navigation.push('Person');
  }
 
  function renderFilterProfiles() {
    return images.map((prof, i) => {
        return(<Animated.View
          key={i}
          
          style={[
            {
              height: SCREEN_HEIGHT - 205,
              width: SCREEN_WIDTH,
              position: 'absolute',
              padding: 5,
              
            }
          ]}
        >
          <View style={Styles.container}>
              <Text style={Styles.cenText}>Different Profile here</Text>
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
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              margin: 3,
              backgroundColor: '#DC143C'
            }}><Text style={Styles.cenText}>Red</Text></TouchableOpacity>

        </View>
        <View style={{
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 40 
        }}>
          <TouchableOpacity
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              margin: 3,
              backgroundColor: '#32CD32'
            }}><Text style={Styles.cenText}>Green</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
}