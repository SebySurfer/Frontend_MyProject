import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ColorList from '../../../components/ColorList.js'


export default function FilterScreen() {
  return (
    <ScrollView  contentContainerStyle={styles.Container}>
     <View style={[styles.Boxes, {backgroundColor:"blue"}]}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column', 
    gap: 35
  }, 

  Boxes:{
    width:100, 
    height: 150, 
    borderRadius: 25, 
    borderCurve: 'continuous', 
    marginBottom: 15, 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    height:'100%'
    }

})