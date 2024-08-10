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
    flex: 1,
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixaRed: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  caixaBlue: {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  },
  caixaGreen: {
    height: 100,
    width: 100,
    backgroundColor: 'green'
  },
});
