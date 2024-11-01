import { Link } from 'expo-router';
import React from 'react';
import {View, Text, Button} from 'react-native';

const AccountScreen = ({navigation}) =>{
    return(
        <View>
            <Text> Account Screen</Text>
            <Link href={'./AboutScreen'}>
            <Text> Go to About by Expo Router</Text>
            </Link>
            <Button
            title="Go to About by normal react-native component"
            onPress={() => navigation.navigate('About')}
        />

        </View>
    )
}

export default AccountScreen;