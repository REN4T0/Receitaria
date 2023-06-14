import React from 'react';
// import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import Macarrao from './receitas/macarrao';
import Cookie from './receitas/cookie';

const Stack = createStackNavigator();

function AppNavigator(){
    return(
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#FE8686', // Cor da barra de navegação
          },
          headerTintColor: 'white', // Cor do texto na barra de navegação
        }}>
            <Stack.Screen name='RECEITARIA' component={ HomeScreen } />
            <Stack.Screen name='Detail' component={ DetailScreen } />
            <Stack.Screen name='MACARRÃO ITALIANO' component={ Macarrao } />
            <Stack.Screen name='COOKIES DE CHOCOLATE' component={ Cookie } />
        </Stack.Navigator>
    );
}

// const styles = StyleSheet.create(
//   {
      
//     },
//   }
// );

export default AppNavigator;