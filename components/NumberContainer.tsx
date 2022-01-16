import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
	TextInput,
} from 'react-native'
import color from '../constants/color'

interface NumberContainerProps {
	children: React.ReactNode
	styleCustom?: { [key: string]: any }
}

const NumberContainer: React.FC<NumberContainerProps> = ({
	children,
	styleCustom,
}) => {
	return (
		<View style={[styles.container, styleCustom]}>
			<Text style={styles.number}>{children}</Text>
		</View>
	)
}
export default NumberContainer

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: color.accent,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
    number: {
        fontSize: 22,
        color: color.accent
    }
})
