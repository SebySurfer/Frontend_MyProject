import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {useHeaderHeight} from '@react-navigation/elements'
import CustomButton from './CustomButton.js';


export default function Profile() {
    const [isMutual, setIsMutual] = useState(true);
    let headerHeight = useHeaderHeight();

    const DisplayButton = (state) =>{
        if(!state){
            return(
                <CustomButton title="Give Like"/>
            )
        } else {
            return(
                <CustomButton title="Get Instagram"/>
            )

        }

    }
  return (

    <ScrollView  contentContainerStyle={[styles.Container, {paddingTop: headerHeight+10}]}>

    <View style={styles.Box}>

        <Text>Name, Age</Text>
        <Text>Match Rate: </Text>
        <DisplayButton/>



    

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    Box:{
        width:300, 
        height: 300,
        borderRadius: 100, 
        borderCurve: 'continuous', 
        marginBottom: 10, 
        paddingHorizontal: 30, 
        paddingVertical: 30, 
        justifyContent: "space-between",
        backgroundColor:"salmon", 
        alignItems: 'center',

        }, 

    Container:{
        alignItems: 'center',
        flexDirection: 'column', 
        gap: 35, 
        justifyContent: 'space-evenly'    

    }
})