import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Profile from '../../../components/Profile.js'

export default function MatchScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/3.jpeg')}
      style={styles.ImageStyle} >
    <View>

      <Profile Name="Aless" Age={21} MatchRate={"33%"} isMutual={true}/>
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