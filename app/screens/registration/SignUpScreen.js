import { StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

export default function SignUpScreen({navigation}) {
  return (
    <ImageBackground
        source={require('../../assets/backgrounds/Background.png')}
        style= {styles.ImageStyle}
    >
    <View style={styles.LogoContainer}>
        <Image source={require('../../assets/dating-site-icon.png')} style={styles.Icon}></Image>
        <Text> Proyecto de la Amistad </Text>
    </View>

    <CustomButton  
    title='Lets Get Started'
    onPress={ () => navigation.navigate('Forms')}/>
    </ImageBackground>


    
  )
}

const styles = StyleSheet.create({
    ImageStyle:{
        
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },

    Button:{
        height: 70, 
        backgroundColor: '#75f1c1',

    }, 
    LogoContainer:{
        position: 'relative', 
        alignItems: 'center'

    }, 
    Icon:{
        height: 100, 
        width: 100
        
    }


})