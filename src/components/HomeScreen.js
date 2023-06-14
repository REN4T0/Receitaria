// import React from 'react';
// import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
// import receitas from '../receitas/receitas';

// const ListaReceitas = ({navigation}) => {
//   return(
//     <FlatList
//       data={receitas}
//       keyExtractor={(item) => item.id}
//       renderItem={({item}) => (
//       <TouchableOpacity onPress={() => navigation.navigate('Detail')} >
//         <View>
//           <Image source={{uri: item.img}}
//           style={{width: 300, height: 300, margin: 16,}}
//          />
//           <Text>{item.nome}</Text>
//           <Text>{item.descricao}</Text>
//         </View>
//       </TouchableOpacity>
//       )}
//     />
//   )
// }

// export default ListaReceitas;
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import cardStyles from '../styledComponents/cardStyle';

function HomeScreen( { navigation } ){
    return(
      <ScrollView style={cardStyles.back}>
          <View>
            <TouchableOpacity style={cardStyles.card} onPress={() => navigation.navigate('MACARRÃO ITALIANO')}>
              <Image style={cardStyles.photo} source={{uri: "https://www.jornaldevinhedo.com.br/wp-content/uploads/2019/09/11911_espaguetefalse.jpg"}}/>
              <Text style={cardStyles.desc}>Macarrão italiano ao molho vermelho</Text>
              <Text style={cardStyles.title}>Macarrão italiano</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={cardStyles.card} onPress={() => navigation.navigate('COOKIES DE CHOCOLATE')}>
              <Image style={cardStyles.photo} source={{uri: "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"}}/>
              <Text style={cardStyles.desc}>Cookies caseiros de chocolate</Text>
              <Text style={cardStyles.title}>Cookies de chocolate</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      
  )
}

export default HomeScreen;