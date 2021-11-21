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
          width: 150,
          height: 32,
          marginHorizontal: 5,
          borderWidth: .1,
          borderRadius: 10,

          textAlign: 'center',
          
      },
      picker: {
        width: 150,
        height: 32,
        margin: 5,
        padding: 3,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center'
      },
      textArea: {
          width: SCREEN_WIDTH-40,
          padding: 5,
          borderWidth: .1,
          borderRadius: 10
      },

      button: {
          width: 100,
          height: 30,
          margin: 10,
          
      },

      toButton: {
        margin: 15
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