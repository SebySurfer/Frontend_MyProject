import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from './CustomButton.js';

/*
Name="" Age={} MatchRate={} isMutual={}

*/
export default function Profile(props) {

    const DisplayButton = ({state}) =>{
        if(!state){
            return(
                <CustomButton title="Give Like"/>
            )
        } else {
            return(
                <>
                <CustomButton title="Get Instagram"/>
                <Text style={styles.Notification}>You both liked each other! </Text>
                </>
                
            )

        }

    }
  return (


    <View style={styles.Box}>

        <Text style={styles.User}>{props.Name} {props.Age}</Text>
        <Text style={styles.Match}>{props.MatchRate}% Match </Text>
        <DisplayButton state={props.isMutual}/>



    

    </View>
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
        justifyContent: "space-evenly",
        backgroundColor:"salmon", 
        alignItems: 'center',

        }, 

    Container:{
        alignItems: 'center',
        flexDirection: 'column', 
        gap: 35, 
        justifyContent: 'space-evenly'    

    }, 
    User:{
        fontSize: 30,
        fontStyle:"italic", 
        color: "#632458"
        

    }, 
    Match:{
        fontSize: 20, 
        color: "white", 

    }, 
    Notification:{
        color:"blue", 
        fontSize: 10
    }
})