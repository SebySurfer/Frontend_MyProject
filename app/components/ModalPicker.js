import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, Touchable} from 'react-native'
import React, { useState } from 'react'

/*
Input an array 
Input default value

*/




export default function ModalPicker(props) {
    const [chooseData, setChooseData] = useState(props.defaultValue || 'Select')
    const [isModalVisible, setIsModalVisible] = useState(false)

    const changeModalVis = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) =>{
        setChooseData(option)
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
        animationType='none'
        visible={isModalVisible}
        onRequestClose={() => changeModalVis(false)}
        
        >
        
        <Picker
        changeModalVis={changeModalVis}
        setData={setData}
        options={props.options}
        />


        </Modal>

    </SafeAreaView>
  )
}

// const OPTIONS = ['Male', 'Female'] Testing for array input
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



const Picker = (props) =>{
    const onPressItem = (option) => {
        props.changeModalVis(false);
        props.setData(option)

    }

    const option = props.options.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.Option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.TextOptions}>
                    {item}

                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
            onPress={() => { props.changeModalVis(false)}}
            style={styles.Picker}
        >

            <View style={[styles.Modal, {width: WIDTH - 100, height: HEIGHT/4}]}>
            <ScrollView>
                {option}

            </ScrollView>
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
        paddingHorizontal: 20,
        marginHorizontal: 30, 
        borderRadius: 15
    }, 
    Picker:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    Modal:{
        backgroundColor:'cyan', 
        borderRadius: 15
    }, 
    Option:{
        alignItems: 'flex-start'
    }, 
    TextOptions:{
        margin: 20, 
        fontSize: 20, 
        fontWeight: 'bold'
    }
    

})