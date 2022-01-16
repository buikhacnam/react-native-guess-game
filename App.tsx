import { useState } from 'react'
import { StyleSheet, View, ScrollView, Button, Text } from 'react-native'
import Header from './components/Header'
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
	const [userNumber, setUserNumber] = useState<number>(0)
	const [guessRounds, setGuessRounds] = useState<number>(0)

	const configureNewGameHandler = () => {
		setGuessRounds(0)
		setUserNumber(0)
	}

	const startGameHandler = (selectedNumber: number) => {
		setUserNumber(selectedNumber)
	}

	const gameOverHandler = (numOfRounds: number) => {
		setGuessRounds(numOfRounds)
		
	}

  let content = <StartGameScreen startGameHandler={startGameHandler}/>
  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler}/>
  } else if (guessRounds > 0) {
	  content = <GameOverScreen guessRound={guessRounds} userNumber={userNumber} configureNewGameHandler={configureNewGameHandler}/>
  }

	return (
		<View style={styles.screen}>
			<Header title='Guess Game' />
			{content}
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
})
