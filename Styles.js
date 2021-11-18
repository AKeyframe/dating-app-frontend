import React from 'react';
import {StyleSheet} from 'react-native';

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
  
      input: {
          width: 100,
          height: 30,
          margin: 10,
          padding: 5,
          borderWidth: 1,
          
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
        textAlign: 'center'
      }





})