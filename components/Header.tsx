import React from 'react'
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native'
import color from '../constants/color'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
}
export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
})