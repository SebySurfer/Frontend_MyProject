import { StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native'
import React from 'react'

export default function SignUpScreen({navigation}) {
  return (
    <ImageBackground
        source={require('../../assets/Background.png')}
        style= {styles.ImageStyle}
    >
    <View style={styles.logoContainer}>
        <Image source={require('../../assets/dating-site-icon.png')} style={styles.Icon}></Image>
        <Text> Proyecto de la Amistad </Text>
    </View>

    <View style={styles.Button}>
    <Button  
    title='Lets Get Started'
    onPress={ () => navigation.navigate('Forms')}/>
    </View>
    </ImageBackground>


    
  )
}

const styles = StyleSheet.create({
    ImageStyle:{
        
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
        
    },

    Button:{
        height: 70, 
        backgroundColor: '#75f1c1',

    }, 
    LogoContainer:{
        position: 'absolute', 
        alignItems: 'center'

    }, 
    Icon:{
        height: 100, 
        width: 100
    }


})