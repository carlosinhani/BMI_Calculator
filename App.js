//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  calcularIMC = () => {
   const peso = 7;
   const altura = 2;

    const imc = Math.pow(peso, altura);

    alert(imc);
  }
  
  render() { 
    const imc = 25;
    const legenda = 'Normal';

  return (
     <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>  

        <View>
          <Text style={styles.resultado}>{imc}</Text>
          <Text style={styles.diagnostico}>{legenda}</Text>
        </View>

        <View>
          <TextInput style={styles.peso} />
          <TextInput style={styles.altura} />
          <Button title="Calcular" onPress={this.calcularIMC} />
        </View>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: "bold",
  },
  resultado:{
     textAlign: 'center',
     fontSize: 22,
     fontWeight: 'bold',   
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
     borderColor: '#000',
     borderWidth: 1,
  },  
  altura: {
    borderColor: '#000',
     borderWidth: 1, 
  },
  
});
