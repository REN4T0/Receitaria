import React from "react";
import {View, Text, Button } from 'react-native';

function DetailScreen( { navigation } ){
    return(
        <View>
            <Text>Tela de detalhes</Text>
            <Button title='Ir para a home' onPress={() => navigation.navigate('Home') } />
        </View>
    );
}

export default DetailScreen;