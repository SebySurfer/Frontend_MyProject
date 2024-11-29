import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import React,{useContext} from 'react'
import {useHeaderHeight} from '@react-navigation/elements'
import CustomButton from '../../../components/CustomButton';

import { GlobalContext } from '../../../GlobalContext.js';


export default function AccountScreen({navigation}) {
  const {userId} = useContext(GlobalContext);



  let headerHeight = useHeaderHeight();
  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/2.jpeg')}
      style={styles.ImageStyle} >

      <View style={[styles.Container, {paddingTop: headerHeight+10}]}>
        <CustomButton
          title="Delete Account" 
          onPress = {() => console.log(userId)}

        />

      </View>
      
     

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    flexDirection: 'column', 
    gap: 35, 
    justifyContent: 'space-evenly'
  }, 
  ImageStyle:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})