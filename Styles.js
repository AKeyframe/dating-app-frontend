import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const bgColor = '#1f272b';
const bgSecColor = '#36454f'
const hiColor = '#eb3f81'; //#e32d73';
const textColor = '#fff';
const invText = 'black';
const tabTextColor = '#70818c';


export default StyleSheet.create({








    navFlex: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
      },
  
      input: {
          width: 150,
          height: 32,
          marginHorizontal: 5,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: hiColor,
          backgroundColor: bgSecColor,
          color: textColor,
          textAlign: 'center',
          
      },
      picker: {
        width: 150,
        height: 32,
        margin: 5,
        padding: 3,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: hiColor,
        backgroundColor: bgSecColor,
        color: textColor,
        textAlign: 'center'
      },

      textArea: {
          width: SCREEN_WIDTH-40,
          marginTop: 3,
          padding: 5,
          borderColor: hiColor,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: hiColor,
          backgroundColor: bgSecColor,
          color: textColor
      },

      button: {
          width: 100,
          height: 30,
          margin: 10,
          backgroundColor: hiColor
          
      },

      toButton: {
        margin: 15,
        color: textColor,
        backgroundColor: bgSecColor,
        width: 225,
        height: 45,
        textAlign: 'center',
        borderRadius: 20,
      },

      buttonText: {
        fontSize: 32,
        color: textColor
      },

      intextButton: {
          backgroundColor: hiColor,
          color: textColor
      },

     
      inline: {
          flex: 1,
          flexDirection: 'row',
      },

      cenText: {
        textAlign: 'center',
        marginVertical: 'auto',
        color: textColor
      },

      tabBar: {
        borderTopWidth: 0,
        borderTopColor: hiColor
      }





})

export {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    bgColor,
    bgSecColor,
    hiColor,
    textColor,
    invText,
    tabTextColor
}