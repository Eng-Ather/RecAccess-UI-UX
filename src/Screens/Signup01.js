import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, GoBackBtn, InputField, Txt} from '../Components';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Signup01 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <GoBackBtn />
      </View>
      <View style={styles.container1}>
        <Txt children={'Hey!Welcome back'} />
        <Txt size={14} children={'Create your new account'} />
      </View>
      <View style={styles.container2}>
        <InputField placeholder={'Full Name'} />
        <InputField placeholder={'Email'} />
        <InputField placeholder={'Phone'} />
        <InputField placeholder={'. . . . . . '} />
        <Button buttonText="Sign up" clr="white" />
      </View>
      <View style={styles.container3}>
        <Txt size={16} children={'-or login with-'} />
        <Button buttonText="Continue with Apple" bgColor="white" />
        <Button buttonText="Continue with Google" bgColor="white" />
      </View>
      <View style={styles.container4}>
        <Txt size={16} children={'Already have an account?Login'} />
      </View>
    </View>
  );
};

export default Signup01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    margin: 10,
  },
  container1: {
    flex: 1,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  container2: {
    flex: 4,
    gap: 18,
  },
  container3: {
    flex: 2,
    gap: 18,
  },
  container4: {
    flex: 1,
  },
});
