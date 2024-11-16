import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ColorList from '../../../components/ColorList.js'
import {useHeaderHeight} from '@react-navigation/elements'
import { Title } from 'react-native-paper';



export default function FilterScreen() {
  let headerHeight = useHeaderHeight();
  return (
    <ScrollView  contentContainerStyle={[styles.Container, {paddingTop: headerHeight+20}]}>
     <View style={[styles.Boxes, {backgroundColor:"#552bc2"}]}>
      <Text style={styles.Title}>Core Values</Text>
    </View>

    <View style={[styles.Boxes, {backgroundColor:"#a998d6"}]}>
    <Text style={styles.Title}>Ways of Thinking</Text>

    </View>

   
    


    </ScrollView>
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
    }, 
    Title:{
      fontSize: 20,
      color: 'white',
    
    }

})