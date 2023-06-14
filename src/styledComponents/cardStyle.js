import React from 'react';
import {StyleSheet} from 'react-native';

const cardStyles = StyleSheet.create(
    {
        card:{
            backgroundColor: '#fff',
            margin: 15,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.25,
            shadowRadius: 4
          
        },

        title:{
            paddingBottom: 15,
            fontSize: 23,
            color: '#936B6B'
        },

        back:{
          backgroundColor: '#E9C8C8',
        },

        desc:{
            paddingTop: 10,
            fontSize: 15,
            color: '#AE8B8B'
            
        },

        photo:{
            height: 240,
            width: 370,
            marginTop: 6,
            zIndex: 2,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.25,
            shadowRadius: 4
        },

        areaBotao:{
            alignItems: 'flex-end',
            marginTop: -45,
            zIndex: 9
        },

        botao:{
            width: 100,
            backgroundColor:'#09a6ff',
            opacity: 10,
            padding: 10,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
        },

        botaoTexto:{
            color: '#fff',
            textAlign: 'center'
        }
    }
);

export default cardStyles;