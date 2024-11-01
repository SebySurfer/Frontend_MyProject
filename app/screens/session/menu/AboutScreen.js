import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function AboutScreen({navigation}) {
  return (
    <View>
      <Text>AboutScreen</Text>
      
      <Button
      title="Go back" 
      onPress={() => navigation.goBack()}
      />

    </View>
  )
}

const styles = StyleSheet.create({})