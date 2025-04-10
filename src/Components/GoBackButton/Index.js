import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { goBackIcon } from '../../Constants/Images';

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.img} source={goBackIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  img: {
    width: 20,
    height: 20,
  },
});
