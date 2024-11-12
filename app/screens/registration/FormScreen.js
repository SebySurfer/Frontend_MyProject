import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function FormScreen() {
  return (
    <View style={styles.Container}>
      <Text>FormScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})