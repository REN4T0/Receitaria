import React from "react";
import {View, Text, Button, Image, ScrollView} from 'react-native';
import receitaStyles from '../../styledComponents/receitaStyle';

function Cookie( { navigation } ){
    return(
        <ScrollView style={receitaStyles.back}>

          <View style={receitaStyles.container}>
          <View style={receitaStyles.alignImage}>
            <Image style={receitaStyles.photo} source={{uri: "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"}}/>
          </View>

               <Text style={receitaStyles.topics}>Ingredientes</Text>

               <Text style={receitaStyles.content}>
                - 125 g de manteiga sem sal em temperatura ambiente{"\n"}
                - 1/2 xícara de açúcar mascavo{"\n"}
                - 1 e 3/4 de xícara de farinha de trigo{"\n"}
                - 300 g de chocolate meio amargo picado{"\n"}
                - para fazer cookie de chocolate acrescentar 1/4 xícara de chocolate em pó{"\n"}
                - 3/4 xícara de açúcar{"\n"}
                - 1 ovo{"\n"}
                - 1 colher (chá) de fermento em pó{"\n"}
                - 1 colher (chá) de essência de baunilha{"\n"}
               </Text>

               <Text style={receitaStyles.topics}>Modo de de preparo</Text>

               <Text style={receitaStyles.content}>
                1. Misture a manteiga, açúcar mascavo, açúcar, essência de baunilha (e chocolate em pó, se for fazer cookies com base de chocolate).{"\n"}

                2. Adicione o ovo batido aos poucos e misture bem.{"\n"}

                3. Acrescente a farinha aos poucos e misture bem (pode ser na mão ou na batedeira planetária){"\n"}

                4. Por último, adicione o fermento e misture só para incorporá-lo à massa.{"\n"}

                5. Depois da massa bem misturada, adicione o chocolate picado.{"\n"}

                6. Forme bolinhas pequenas e asse em forno preaquecido, sobre papel manteiga, por aproximadamente 15 a 20 minutos (250° C).{"\n"}
               </Text>
              <Button style={receitaStyles.botao} title='Ir para a home' onPress={() => navigation.navigate('RECEITARIA') } />
          </View>

        </ScrollView>
    );
}

export default Cookie;