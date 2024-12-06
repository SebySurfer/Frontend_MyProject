import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CustomButton from './CustomButton.js';

export default function Profile(props) {
  const showInstagramAlert = () => {
    Alert.alert(
      'Instagram:',
      `@${props.instagram}`,
      [{ text: 'OK' }]
    );
  };

  const DisplayButton = () => (
    <CustomButton title="Get Instagram" onPress={showInstagramAlert} />
  );

  return (
    <View style={styles.Box}>
      <Text style={styles.User}>{props.Name}</Text>
      <Text style={styles.Match}>{props.MatchRate}% Match</Text>
      <DisplayButton />
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: 300,
    height: 300,
    borderRadius: 100,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'space-evenly',
    backgroundColor: 'salmon',
    alignItems: 'center',
  },
  User: {
    fontSize: 30,
    fontStyle: 'italic',
    color: '#632458',
  },
  Match: {
    fontSize: 20,
    color: 'white',
  },
});
