import React from 'react'
import { useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet, FlatList,  } from 'react-native'

export default function Instructions({navigation}){
 const route = useRoute();
    const guidelines =[
        {key: '1', instruction:'1. Input any number in the input field between(0-9)'},
        {key: '2', instruction:'2. Press the play button'},
        {key: '3', instruction:'3. If your guess matches the secret number you win'},
        {key: '4', instruction:'4. If your guess doesnt match the secret number you are allowed to retryPress the play button'}
    ]
    return(
      
            <View style={styles.container}>
                <View style={styles.instrView}>
                    <Text style={styles.instrTitle}>Read the instructions before proceeding to play</Text>
                    <View style={styles.instrTextView}>
                        <Text style={styles.instrTextTitle}>This a number guessing game:</Text>
                        <FlatList data={guidelines} 
                        renderItem={({item})=>(
                            <View key={item.key}>
                                <Text>{item.instruction}</Text>
                            </View>
                        )}
                        />

                    </View>                    
                </View>
                <View style={styles.instrView}>
                    <Text><Text style={{fontWeight:'bold',}}>NOTE:</Text> You have upto 3 trials before game over</Text>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>Enjoy! {route.params.name}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Game')}>
                        <Text>Proceed to Play</Text>
                    </TouchableOpacity>
                </View>
            </View>     
       
    )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'space-evenly'
   },
   instrView:{
    flex:1,
    alignItems:'center',
    // backgroundColor:'gray',
    borderRadius: 6,
    height:400
   },
   instrTitle:{
    fontSize:18,
    padding: 10
   },

   instrTextView:{
    alignItems: '',
    flexWrap: 'no-wrap',
    padding: 15,
    margin: 10,
   },
   instrTextTitle:{
    fontSize:16,
    textDecorationLine: 'underline',
    marginBottom: 10
   },
   buttonView:{
    color:'black',
    fontWeight:'900',
    fontSize:30,
    alignItems:'center',
    backgroundColor: 'skyblue',
    borderRadius: 6,
    padding: 15

   }
})