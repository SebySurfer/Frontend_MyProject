import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {useHeaderHeight} from '@react-navigation/elements'
import CustomButton from './CustomButton.js';

/*
Name="" Age={} MatchRate={} isMutual={}

*/
export default function Profile(props) {
    let headerHeight = useHeaderHeight();

    const DisplayButton = ({state}) =>{
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

        <Text>{props.Name}, {props.Age}</Text>
        <Text>Match Rate: {props.MatchRate} </Text>
        <DisplayButton state={props.isMutual}/>



    

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