import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'

export default function CustomButton(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.Container}>
    
        <Text style={styles.Text}> {props.title}</Text>
    
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: 'purple',
        paddingHorizontal: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%', // Set a more reasonable width
        height:'6%',
        maxWidth: 200,
        minWidth: 150,
        minHeight: 50

    }, 

    Text:{
        color: '#ffffff', 
        fontSize: 15
    }


})