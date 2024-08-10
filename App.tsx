import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return <View style={styles.caixaRed}></View>
}

function CaixaBlue(){
  return <View style={styles.caixaBlue}></View>
}

function CaixaGreen(){
  return <View style={styles.caixaGreen}></View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <CaixaGreen></CaixaGreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    flexDirection: 'row', // disposição horizontal (para exemplificar)
    justifyContent: 'space-between', // distribui os elementos igualmente com espaço entre eles
    alignItems: 'center', // centraliza os elementos verticalmente
    flexWrap: 'wrap', // quebra os elementos para a próxima linha se necessário
    alignContent: 'flex-end', /* funciona em conjunto com o wrap. determina como os elementos, 
    ao se quebrar, vão se comportar (eixo secundário)*/
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: '#fff',
  },
  caixaRed: {
    height: 300,
    width: 100,
    backgroundColor: 'red',
    flexBasis: 200 // aumenta o elemento em relação ao flexDirection
  },
  caixaBlue: {
    height: 300,
    width: 100,
    backgroundColor: 'blue',
    //alignSelf: 'flex-start' // msm coisa q o alignItems, mas pertencente aos filhos
  },
  caixaGreen: {
    height: 300,
    width: 100,
    backgroundColor: 'green',
    flexGrow: 1, // parecido com a propriedade flex, porém para o filho
  },
});
