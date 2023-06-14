import React from "react";
import {View, Text, Button, Image, ScrollView} from 'react-native';
import receitaStyles from '../../styledComponents/receitaStyle';

function Macarrao( { navigation } ){
    return(
        <ScrollView style={receitaStyles.back}>

          <View style={receitaStyles.container}>
          <View style={receitaStyles.alignImage}>
            <Image style={receitaStyles.photo} source={{uri: "https://www.jornaldevinhedo.com.br/wp-content/uploads/2019/09/11911_espaguetefalse.jpg"}}/>
          </View>

               <Text style={receitaStyles.topics}>Ingredientes</Text>

               <Text style={receitaStyles.content}>
                - Molho de tomate{"\n"}
                - Macarrão (N°4){"\n"}
                - Alho{"\n"}
                - Manjericão{"\n"}
                - Sal a gosto{"\n"}
                - Azeite
               </Text>

               <Text style={receitaStyles.topics}>Modo de de preparo</Text>

               <Text style={receitaStyles.content}>
                1. Cozinhe o macarrão em água fervente e sal, até que fique 'al dente'.{"\n"}

                2. Enquanto isso, em uma panela, aqueça o azeite, adicione os tomates, o MAGGI MEU SEGREDO e refogue ligeiramente. Junte o manjericão e misture.{"\n"}

                3. Escorra o macarrão, coloque em um recipiente refratário e adicione o refogado de tomates.{"\n"}

                4. Polvilhe o queijo ralado e sirva a seguir.
               </Text>
              <Button style={receitaStyles.botao} title='Ir para a home' onPress={() => navigation.navigate('RECEITARIA') } />
          </View>

        </ScrollView>
    );
}

export default Macarrao;