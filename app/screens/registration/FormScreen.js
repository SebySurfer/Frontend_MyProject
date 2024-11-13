import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { TextInput } from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements'


export default function FormScreen() {
  let headerHeight = useHeaderHeight();

  return (
    <View style={[styles.Container, {paddingTop: headerHeight + 50}]}>
      <CustomTextInput title='First Name'/>
      <CustomTextInput title='Last Name'/>

    </View>
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
    }
})