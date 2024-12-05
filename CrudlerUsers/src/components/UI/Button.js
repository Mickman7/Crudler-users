import React from 'react'
import { Vibration } from 'react-native';
import { Pressable, StyleSheet, Text, View, } from 'react-native';

export const Button = ({label, onClick}) => {
  return (
    <Pressable onPress={onClick} style={styles.button}>
        <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
};

export const ButtonTray = ({children}) => {
    return <View style={styles.buttonTray}>{children}</View>
};

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        maxHeight: 30,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
    },
    label: {
        fontSize: 16,
    },
    buttonTray: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 20,
        shadowColor: 'grey',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 5 ,
        shadowOffset : { width: 10, height: 5},
    }
})