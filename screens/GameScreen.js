import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React,{ useState, useEffect } from "react";

export default function GameScreen({navigation}) {

  const [guessedNumber, setGuessedNumber] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(3)
  const [score, setScore] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [secretNumber, setSecretNumber] = useState(Math.round(Math.random()*9))

  useEffect(()=>{
   
    if(guessedNumber.length >0){
        setShowButton(true)
    }else{
        setShowButton()
    }
  },[guessedNumber, showButton])


  const matchNumbers =()=>{
    const userInput = parseInt(guessedNumber, 10);
    if(userInput === secretNumber){
      const Score = score + 1;
      Alert.alert("CONGRATULATION!","Yaay!. You guessed right",[{text: "THANKS"}]);
      setSecretNumber(Math.round(Math.random()*9));
      setScore(Score);
      setAttemptsLeft(3);

    }else {
      const remainingTrials = (attemptsLeft-1);
      if(remainingTrials === 0){
        Alert.alert('Whoops!',`Game Over! The correct number was ${secretNumber}`, [{text: "TRY AGAIN"}, {text:"EXIT", onPress: ()=> navigation.navigate('Home')}]);
        setSecretNumber(Math.round(Math.random()*9));
        setAttemptsLeft(3);
      }else {
        Alert.alert('Try Again', `Sorry! the number didn't match, try again. You have ${remainingTrials} attempts left`,[{text: "CONTINUE"}]);
        setSecretNumber(Math.round(Math.random()*9));
        setAttemptsLeft(remainingTrials)
      }
      
    }
    setGuessedNumber('')
  }

  const handleInput = (value)=>{
    setGuessedNumber(value);
   }

  return (
    <>
      
      <View style={styles.mainContainer}>
        <View >
          <Text style = {styles.scoreText}>Your score: {score}</Text>
        </View>
        <View>
          <TextInput
            maxLength={1}
            value={guessedNumber}
            onChangeText={handleInput}
            placeholder="0-9"
            keyboardType="numeric"
            textAlign='center'
            fontSize={18}
            style={styles.input}
          />
        </View>
        {showButton? <View>
            <Pressable onPress={matchNumbers} style={styles.button}>
                <Text>PLAY</Text>
            </Pressable>
        </View> :<Text>Enter a number to play</Text>}
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 14,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  button:{
    color:'black',
    fontWeight:'900',
    fontSize:30,
    alignItems:'center',
    backgroundColor: 'skyblue',
    borderRadius: 6,
    padding: 15,
    width: 200
  },
  scoreText:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});
