import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, onChangeName] = React.useState('Name');
  const [pass, onChangePass] = React.useState('pass');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Form</Text>
      <TextInput
      placeholder = "Enter Your Name" 
      style={{ height: 40,width: 200, margin:10, borderColor: 'gray', borderWidth: 1, color:'green', textAlign:'center', borderColor:'lightblue' }}
      onChangeName={text => onChangeName(text)}
    />
    <TextInput
    placeholder = "Enter Your Password" 
      style={{ height: 40,width: 200, borderColor: 'gray', borderWidth: 1, color:'white', textAlign:'center', borderColor:'lightblue' }}
      onChangePass={text1 => onChangePass(text1)}
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'blue'
  },
  text: {
    color:'blue',
    fontSize:30
  }
});
