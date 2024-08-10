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
    flex: 1, // faz com q o container ocupe a tela toda
    flexDirection: 'column', // relacionado ao pai (container)
    justifyContent: 'flex-start', // justifica as tags em rel. ao flexDirection (eixo primário)
    alignItems: 'flex-start', // rel. ao eixo secundário
    flexWrap: 'wrap', // caso o elemento vá sair da tela, ele pula uma coluna/linha (eixo 1°)
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: '#fff',
  },
  caixaRed: {
    height: 300,
    width: 100,
    backgroundColor: 'red',
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
    backgroundColor: 'green'
  },
});
