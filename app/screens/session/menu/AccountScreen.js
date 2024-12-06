import { StyleSheet, View, Alert, ImageBackground } from 'react-native';
import React, { useContext } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import axios from 'axios';
import CustomButton from '../../../components/CustomButton';
import { GlobalContext } from '../../../GlobalContext.js';

export default function AccountScreen({ navigation }) {
  const { userId, setUserId } = useContext(GlobalContext);
  let headerHeight = useHeaderHeight();

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/${userId}`); 
      if (response.status === 200) {
        Alert.alert('Account Deleted', 'Your account has been deleted.', [
          {
            text: 'OK',
            onPress: () => {
              setUserId(null); 
              navigation.navigate('Sign Up'); 
            },
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to delete account. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/2.jpeg')}
      style={styles.ImageStyle}
    >
      <View style={[styles.Container, { paddingTop: headerHeight + 10 }]}>
        <CustomButton title="Delete Account" onPress={handleDeleteAccount} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 35,
    justifyContent: 'space-evenly',
  },
  ImageStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
