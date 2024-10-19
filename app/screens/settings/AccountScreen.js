import React from 'react';
import {View, Text, Button} from 'react-native';

const AccountScreen = ({navigation}) =>{
    return(
        <View>
            <Text> Account Screen</Text>
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />

        </View>
    )
}

export default AccountScreen;