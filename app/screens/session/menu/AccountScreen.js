import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function AccountScreen({navigation}) {
  return (
    <View>
      <Text>AccountScreen</Text>

      <Button
      title="Go back" 
      onPress={() => navigation.goBack()}
      />

    </View>
  )
}

const styles = StyleSheet.create({})