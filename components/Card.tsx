import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native'

interface CardProps {
    styleCustom?: {[key: string]: any}
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children, styleCustom}) => {
return <View style={[styles.card, styleCustom]}>{children}</View>
}
export default Card

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 10,


    }
})