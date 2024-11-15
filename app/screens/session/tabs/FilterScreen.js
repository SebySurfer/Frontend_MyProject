import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorList from '../../../components/ColorList.js'


export default function FilterScreen() {
  return (
    <View styles={styles.Container}>
     <ColorList color="#4f46e5"

      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column', 
    gap: 35
  }, 
})