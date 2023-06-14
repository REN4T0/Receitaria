import React from 'react';
import {StyleSheet} from 'react-native';

const receitaStyles = StyleSheet.create(
  {
    back:{
      backgroundColor: '#E9C8C8',
      justifyContent: 'center',
      alignItems: 'center'
    },

    container:{
      backgroundColor: '#fff',
      width: 380,
      // height: 670,
      marginTop: 20,
      padding: 20,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.25,
      shadowRadius: 4
    },

    alignImage:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 20
    },

    photo: {
      width: 330,
      height: 180,
    },

    topics:{
      fontWeight: 'bold',
      fontSize: 17,
      marginBottom: 15,
    },

    content:{
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 5,
      textAlign: 'justify',
      // take that
      // westlife - my love
    },

    botao:{
      backgroundColor: '#FE8686',
      zIndex: 9,
    }
  }
);

export default receitaStyles;