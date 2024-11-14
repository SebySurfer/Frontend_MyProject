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
            <TouchableOpacity onPress={() => changeModalVis(true)} style={styles.TouchableOpacity}>
                <Text style={styles.Text}> {chooseData} </Text>
            </TouchableOpacity>

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
    const LOOP_OFFSET = props.options.length;

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

    const handleScrollEnd = (event) => {
        const contentOffsetY = event.nativeEvent.contentOffset.y;
        const currentIndex = Math.round(contentOffsetY / ITEM_HEIGHT);

        // Scroll to the other end if the user scrolls past the start or end
        if (currentIndex <= 0) {
            flatListRef.current.scrollToOffset({
                offset: ITEM_HEIGHT * (data.length - 1),
                animated: false,
            });
        } else if (currentIndex >= data.length - 1) {
            flatListRef.current.scrollToOffset({
                offset: 0,
                animated: false,
            });
        }
    };

    return (
        <TouchableOpacity onPress={() => props.changeModalVis(false)} style={styles.Picker}>
            <View style={[styles.Modal, { width: WIDTH - 100, maxHeight: HEIGHT / 2 }]}>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollEnd={handleScrollEnd}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    initialNumToRender={props.options.length}
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
    Text: {
        marginVertical: 20,
        fontSize: 25,
    },
    TouchableOpacity: {
        backgroundColor: 'purple',
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        marginHorizontal: 30,
        borderRadius: 15,
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
