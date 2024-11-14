import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import * as React from 'react'
import { TextInput } from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements'
import ModalPicker from '../../components/ModalPicker.js';
import CustomButton from '../../components/CustomButton.js';

export default function FormScreen({navigation}) {
  let headerHeight = useHeaderHeight();

  const Gender = ["Male", "Female"];
  const InterestedGender = ["Male", "Female"]



  return (
    <ImageBackground
      source={require('../../assets/backgrounds/White.jpeg')}
      style={styles.ImageStyle}
    >
    <View style={[styles.Container, {paddingTop: headerHeight + 50}]}>
      <CustomTextInput title='First Name'/>
      <CustomTextInput title='Last Name'/>

      <ModalPicker
        title="Gender:"
        options={Gender}
      />

      <ModalPicker
        title="Attracted to:"
        options={InterestedGender}
       />

      <CustomTextInput title='Phone Number'/>
      <CustomTextInput title='Instagram'/>

      <CustomButton  
        title='Sign Up'
        onPress={ () => navigation.navigate('Home')}/>

    </View>
    </ImageBackground>
  )
}

const CustomTextInput = (props) => {
  

  const [text, setText] = React.useState("");

  return (
    <TextInput
      label={props.title}
      value={text}
      onChangeText={text => setText(text)}
      style={styles.input}

    />
  );
};




const styles = StyleSheet.create({
  
    Container:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column', 
        gap: 35
      }, 
        input: {
          width: 300, // Set a fixed width for the input box
          maxWidth: '90%', // Ensure it doesn't stretch too much on wider screens
    }, ImageStyle:{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    }
})