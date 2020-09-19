
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
     peso: 0,
     altura: 0,
     imc: 0,
     legenda: 'Indeterminado',
     cor: '#C0C0C0',
    

  };

  calcularIMC = () => {
    const resultado = (this.state.peso > 0 && this.state.altura > 0) ?
      this.state.peso/ Math.pow(this.state.altura, 2) : 0

    const corResult = resultado > 0 ? resultado <18.5 ?  '#363636' :
       resultado <= 25 ? '#87CEFA' :
        resultado <= 30 ? '#ADFF2F' :
         resultado <= 40 ? '#FF6347' :
          '#880000' : '#C0C0C0'

    const resultLegend = resultado > 0 ? resultado <18.5 ? 'Magreza' :
       resultado <= 25 ? 'Normal' :
        resultado <= 30 ? 'Sobrepezo' :
         resultado <= 40 ? 'Obesidade' :
          'Obesidade Grave' : 'Indeterminado'


    this.setState({ imc: Math.ceil (resultado), legenda: resultLegend, cor: corResult});
  }
  
  render() { 
  return (
     <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>  

        <View style={[styles.painel, { backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput style={styles.peso} onChangeText={valor =>  { this.setState({peso: valor.replace (',', '.')});}} />
          <TextInput style={styles.altura} onChangeText={valor => { this.setState({altura: valor.replace(',', '.')});}} />

          <Button mode='contained' title="Calcular" onPress={this.calcularIMC} />

          
        </View>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 30,
  },
  painel: {
    alignSelf: 'center',
    borderRadius: 15,
    width: 200,
    marginVertical: 30,
    padding: 8,
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
    fontWeight: 'bold',
  },
  peso: {
     height:50,
     borderRadius:10,
     marginVertical: 10,
     borderColor: '#000',
     textAlign:"center",
     backgroundColor: '#bdc3c7',
  },  
  altura: {  
     height: 50,
     borderRadius : 10,
     marginVertical: 10,
     borderColor: '#000',
     textAlign: 'center',
     backgroundColor: '#bdc3c7',

  }
  
});
