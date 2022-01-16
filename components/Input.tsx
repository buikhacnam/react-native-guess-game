import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
	TextInput,
} from 'react-native'
interface InputProps {
    value: string
    onChangeText: (text: string) => void
	styleCustom?: { [key: string]: any }
	keyBoardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad'
	maxLength?: number
}

const Input: React.FC<InputProps> = ({
	value,
    onChangeText,
    styleCustom,
	keyBoardType,
	maxLength,
    
}) => {
	return (
		<TextInput
            value={value}
            onChangeText={onChangeText}
			style={[styles.input, styleCustom]}
			keyboardType={keyBoardType}
			maxLength={maxLength}
            blurOnSubmit
		/>
	)
}
export default Input

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	},
})
