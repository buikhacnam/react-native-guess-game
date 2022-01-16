import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
	TextInput,
	Alert,
} from 'react-native'

interface GameOverScreenProps {
	guessRound: number
	userNumber: number
	configureNewGameHandler: () => void
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
	guessRound,
	userNumber,
	configureNewGameHandler,
}) => {
	return (
		<View style={styles.screen}>
			<Text>The Game is Over!</Text>
			<Text>Number of Rounds: {guessRound}</Text>
			<Text>Number was: {userNumber}</Text>
			<Button title='Start Over' onPress={configureNewGameHandler} />
		</View>
	)
}
export default GameOverScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
