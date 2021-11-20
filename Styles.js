import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    navFlex: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1
      },
  
      input: {
          width: 100,
          height: 30,
          margin: 10,
          padding: 5,
          borderWidth: 1,
          
      },
      textArea: {
          width: SCREEN_WIDTH-50,
          borderWidth: 1
      },

      button: {
          width: 100,
          height: 30,
          margin: 10,
          
      },

      toButton: {
        margin: 10
      },

      intextButton: {
          backgroundColor: '#fff',
          color: 'black'
      },

      buttonText: {
        fontSize: 32
      },
      inline: {
          flex: 1,
          flexDirection: 'row',
      },

      cenText: {
        textAlign: 'center',
        marginVertical: 'auto'
      }





})