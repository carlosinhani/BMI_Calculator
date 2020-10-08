import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app: {
      padding: 15,
      backgroundColor:'#130f40',
      height: 900,
    },
    painel: {
      
      alignSelf: 'center',
      borderRadius: 25,
      width: 250,
      marginVertical: 10,
      padding: 10,
    },
    legenda: {
      marginTop: 20,
      textAlign: 'center',
      fontSize: 30,
      textDecorationLine:"underline",
      fontWeight: "bold",
      color:'#f6e58d',
    },
    resultado:{
       textAlign: 'center',
       fontSize: 30,
       fontWeight: 'bold',   
    },
    diagnostico: {
       textAlign: 'center',
       fontSize: 25,
       textDecorationLine:"underline",
       fontWeight: 'bold',
    },
    peso: {
       height:60,
       borderRadius:10,
       marginVertical: 10,
       fontSize: 25,
       fontWeight: 'bold',
       fontStyle: 'italic',
       textAlign:"center",
       color: '#f1c40f',
       backgroundColor: '#2c3e50',
       
    },  
    altura: {  
       height: 60,
       borderRadius : 10,
       marginVertical: 10,
       fontSize: 25,
       fontWeight: 'bold',
       fontStyle: "italic",
       textAlign: 'center',
       color: '#f1c40f',
       backgroundColor: '#2c3e50',
     }
    
    
  });

  export default styles