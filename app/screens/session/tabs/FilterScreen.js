import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import ColorList from '../../../components/ColorList.js'
import {useHeaderHeight} from '@react-navigation/elements'
import ModalPicker from '../../../components/ModalPicker.js'
import CustomButton from '../../../components/CustomButton.js'

export default function FilterScreen() {
  let Questions = ["Too often", "I do", "In between", "Not too much", "Not at all"]
  let BooleanQ = ["Yes", "No"]

  let headerHeight = useHeaderHeight();
  return (
    <ImageBackground
source={require('../../../assets/backgrounds/1.jpeg')}
style={styles.ImageStyle} >

    <ScrollView  contentContainerStyle={[styles.Container, {paddingTop: headerHeight+10}]}>
    <CustomButton
        title="Update"
        onPress={() => console.log('Update pressed')} // Replace with your desired functionality
        style={styles.CustomButton}
      />
     <View style={[styles.Boxes, {backgroundColor:"#552bc2"}]}>
      <Text style={styles.Title}>Core Values</Text>
      <ModalPicker title="Drink" options={Questions} titleColor="white" />
      <ModalPicker title="Smoke" options={Questions} titleColor="white" />
      <ModalPicker title="Family-Oriented" options={Questions} titleColor="white" />
      <ModalPicker title="Religious" options={Questions} titleColor="white" />

      

    </View>

    <View style={[styles.Boxes, {backgroundColor:"#a998d6"}]}>
    <Text style={styles.Title}>Ways of Thinking</Text>
    <ModalPicker title="Want kids" options={BooleanQ} titleColor="white" />
    <ModalPicker title="Like outdoors" options={BooleanQ} titleColor="white" />
   

    </View>

    

    </ScrollView>

    

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

  Boxes:{
    width:300, 
    height: 300,
    borderRadius: 18, 
    borderCurve: 'continuous', 
    marginBottom: 10, 
    paddingHorizontal: 30, 
    paddingVertical: 30, 
    justifyContent: "space-between"
    }, 
    Title:{
      fontSize: 20,
      color: 'white',
    
    }, 
    ImageStyle:{
        
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
      
  },
  CustomButton: {
    marginBottom: 20, 
  },

})