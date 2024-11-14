import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, Dimensions, FlatList } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

/*
Input an array
Input default value
*/

export default function ModalPicker(props) {
    const [chooseData, setChooseData] = useState(props.defaultValue || 'Select');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVis = (bool) => {
        setIsModalVisible(bool);
    };

    const setData = (option) => {
        setChooseData(option);
    };

    return (
        <SafeAreaView style={styles.Container}>
            {/* Title and Picker Component Inline */}
            <View style={styles.InlineContainer}>
                <Text style={styles.TitleText}>{props.title}</Text>
                <TouchableOpacity onPress={() => changeModalVis(true)} style={styles.TouchableOpacity}>
                    <Text style={styles.Text}> {chooseData} </Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                animationType="none"
                visible={isModalVisible}
                onRequestClose={() => changeModalVis(false)}
            >
                <Picker changeModalVis={changeModalVis} setData={setData} options={props.options} />
            </Modal>
        </SafeAreaView>
    );
}

// Constants for dimensions
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Picker = (props) => {
    const flatListRef = useRef(null);
    const [data, setData] = useState([]);
    const ITEM_HEIGHT = 60;

    useEffect(() => {
        setData([...props.options]);
    }, [props.options]);

    const onPressItem = (option) => {
        props.changeModalVis(false);
        props.setData(option);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.Option} onPress={() => onPressItem(item)}>
            <Text style={styles.TextOptions}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <TouchableOpacity onPress={() => props.changeModalVis(false)} style={styles.Picker}>
            <View style={[styles.Modal, { width: WIDTH - 100, maxHeight: HEIGHT / 4 }]}>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    InlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 10,
    },
    TitleText: {
        fontSize: 18,
        marginRight: 10,
    },
    Text: {
        marginVertical: 20,
        fontSize: 25,
    },
    TouchableOpacity: {
        backgroundColor: 'purple',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        flex: 1,
    },
    Picker: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Modal: {
        backgroundColor: 'cyan',
        borderRadius: 15,
        maxHeight: '50%',
    },
    Option: {
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
    },
    TextOptions: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

