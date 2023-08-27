import { SafeAreaView, Text, Platform, StyleSheet, View, TouchableOpacity,TextInput} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

export default function HomeScreen ({navigation}){
 const [name, setName] = useState('')

  return (
    <SafeAreaView style ={styles.container}>
    <StatusBar style ='auto' />

      <Text style ={styles.title}>Welcome</Text>
      <View>
      <TextInput
            maxLength={20}
            value={name}
            onChangeText={(name) => setName(name)}
            placeholder="Put your name here"
            textAlign='start'
            fontSize={18}
            style={styles.input}
          />
      </View>
      {name.length>=3? <View>
        <TouchableOpacity onPress ={()=>navigation.navigate('Instructions', {name: name})} style={styles.button} >
            <Text>Continue</Text>
        </TouchableOpacity>
      </View> : ""}
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    padding: Platform.OS === 'android'? 30 : '',
    backgroundColor: '#fff',
    justifyContent:'space-around',
    alignItems: 'center'
},
title:{
fontSize:35,
textAlign:'center',
color:'gray'
},
button:{
  color:'black',
  fontWeight:'900',
  fontSize:30,
  alignItems:'center',
  backgroundColor: 'skyblue',
  borderRadius: 6,
  padding: 15
},
input: {
  borderColor: "skyblue",
  width: 250,
  height: 40,
  borderWidth: 1,
  margin: 10,
  padding: 10,
  borderRadius: 4
},
})
 