import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Profile from '../../../components/Profile.js'
import {useHeaderHeight} from '@react-navigation/elements'


export default function MatchScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/3.jpeg')}
      style={styles.ImageStyle} >
    <ScrollView  contentContainerStyle={[styles.Container, {paddingTop: headerHeight+10}]}>


      <Profile Name="Aless" Age={21} MatchRate={33} isMutual={false}/>
      <Profile Name="Mia" Age={28} MatchRate={90} isMutual={true}/>
      <Profile Name="Regina" Age={19} MatchRate={87} isMutual={true}/>
      <Profile Name="Maria" Age={25} MatchRate={22} isMutual={false}/>
      <Profile Name="Dayana" Age={29} MatchRate={19} isMutual={false}/>

    </ScrollView>

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