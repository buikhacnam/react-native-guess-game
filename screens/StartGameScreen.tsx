import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import Color from '../constants/color'
interface StartGameScreenProps {
    startGameHandler: (selectedNumber: number) => void
}

const StartGameScreen: React.FC<StartGameScreenProps> = ({startGameHandler}) => {
	const [enteredValue, setEnteredValue] = useState<string>('')
	const [confirmed, setConfirmed] = useState<boolean>(false)
	const [selectedNumber, setSelectedNumber] = useState<number>(0)

	const numberInputHandler = (inputText: string) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''))
	}

	const resetInputHandler = () => {
		setEnteredValue('')
		setConfirmed(false)
	}

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue)
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 999) {
			Alert.alert(
				'Invalid number!',
				'Number has to be a number between 1 and 999.',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetInputHandler,
					},
				]
			)
			return
		}
		setConfirmed(true)
		setSelectedNumber(parseInt(enteredValue))
		setEnteredValue('')
		Keyboard.dismiss()
	}

	let confirmedOutput: JSX.Element | null = null

	if (confirmed) {
		confirmedOutput = (
			<Card styleCustom={styles.summaryContainer}>
				<Text>You selected:</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button title='Start Game' onPress={() =>startGameHandler(selectedNumber)} />
			</Card>
		)
	}

	return (
		// click outside of the keyboard to close it
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss()
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card styleCustom={styles.inputContainer}>
					<Text style={styles.title}>Select a Number</Text>
					<Input
						value={enteredValue}
						onChangeText={numberInputHandler}
						styleCustom={styles.input}
						keyBoardType='numeric'
						maxLength={3}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								color={Color.accent}
								title='Reset'
								onPress={resetInputHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button
								color={Color.primary}
								title='Confirm'
								onPress={confirmInputHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	)
}
export default StartGameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		// backgroundColor: Color.cyan,
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		maxWidth: '80%',
		alignItems: 'center',
		textAlign: 'center',
	},

	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
})
