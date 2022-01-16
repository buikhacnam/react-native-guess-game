import React, { useState, useRef, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
	TextInput,
	Alert,
} from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
import color from '../constants/color'

const generateRandomBetween = (
	min: number,
	max: number,
	exclude: any
): number => {
	min = Math.ceil(min)
	max = Math.floor(max)
	//The maximum is exclusive and the minimum is inclusive
	const rndNum = Math.floor(Math.random() * (max - min)) + min
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude)
	}
	return rndNum
}

interface GameScreenProps {
	userChoice: number
	gameOverHandler: (numOfRounds: number) => void
}

const GameScreen: React.FC<GameScreenProps> = ({
	userChoice,
	gameOverHandler,
}) => {
	const [currentGuess, setCurrentGuess] = useState<number>(() =>
		generateRandomBetween(1, 1000, userChoice)
	)
	const [rounds, setRounds] = useState<number>(0)
	const currentLowest = useRef(1)
	const currentHighest = useRef(1000)

	useEffect(() => {
		if (currentGuess === userChoice) {
			Alert.alert('You win!')
			gameOverHandler(rounds)
		}
	}, [currentGuess, userChoice, gameOverHandler])

	const nextGuessHandler = (direction: 'lower' | 'greater') => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'greater' && currentGuess > userChoice)
		) {
			Alert.alert('Wrong!', 'You know that this is wrong...', [
				{ text: 'Sorry', style: 'cancel' },
			])
			return
		}

		if (direction === 'lower') {
			currentHighest.current = currentGuess
		} else {
			currentLowest.current = currentGuess
		}

		const nextNumber = generateRandomBetween(
			currentLowest.current,
			currentHighest.current,
			currentGuess
		)

		setCurrentGuess(nextNumber)
		setRounds(curRounds => curRounds + 1)
	}

	return (
		<View style={styles.screen}>
			<Text>Current Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Text>Higher or Lower?</Text>
				<View style={styles.buttonContainer}>
					<Button
						title='Lower'
						onPress={() => nextGuessHandler('lower')}
					/>
					<Button
						title='Higher'
						onPress={() => nextGuessHandler('greater')}
					/>
				</View>
			</Card>
		</View>
	)
}
export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		// backgroundColor: color.magenta,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
})
