
import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './style'


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
          <TextInput style={styles.peso} placeholder="Coloque seu Peso" onChangeText={valor =>  { this.setState({peso: valor.replace (',', '.')});}} />
          <TextInput style={styles.altura} placeholder="Coloque sua Altura"onChangeText={valor => { this.setState({altura: valor.replace(',', '.')});}} />

          
          <Button  title="Calcular" color="#f0932b" onPress={this.calcularIMC}/>
          
        </View>
     </View>
   );
  }
}

