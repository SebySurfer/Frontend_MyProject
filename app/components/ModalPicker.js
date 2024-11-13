import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, Touchable} from 'react-native'
import React, { useState } from 'react'

export default function ModalPicker() {
    const [chooseData, setChooseData] = useState('Select')
    const [isModalVisible, setIsModalVisible] = useState(false)

    const changeModalVis = (bool) => {
        setIsModalVisible(bool)
    }

  return (
    <SafeAreaView style={styles.Container}>
        <TouchableOpacity
        onPress={() => changeModalVis(true)}
        style={styles.TouchableOpacity}
        >
            <Text style={styles.Text}> {chooseData} </Text>
        </TouchableOpacity>

        <Modal
        transparent={true}
        animationType='True'
        visible={isModalVisible}
        onRequestClose={() => changeModalVis(false)}
        >
        
        <Picker
        changeModalVis={changeModalVis}
        
        />


        </Modal>

    </SafeAreaView>
  )
}

const Options = ['Male', 'Female']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Picker = (props) =>{
    return(
        <TouchableOpacity
            onPress={() => { props.changeModalVis(false)}}
            style={styles.Picker}
        >

            <View style={[styles.Modal, {width: WIDTH - 20, height: HEIGHT/2}]}>

            </View>


        </TouchableOpacity>
    )

}





const styles = StyleSheet.create({
    Container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 20, 

    }, 
    Text:{
        marginVertical: 20, 
        fontSize: 25
    }, 
    TouchableOpacity:{
        backgroundColor: 'purple', 
        alignSelf: 'stretch', 
        paddingHorizontal: 20
    }, 
    Picker:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    Modal:{
        backgroundColor:'cyan', 
        borderRadius: 10
    }

})