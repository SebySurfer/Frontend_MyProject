import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function MatchScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/3.jpeg')}
      style={styles.ImageStyle} >
    <View>
      <Text>MatchScreen</Text>
    </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  ImageStyle:{
        
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
    
},


})