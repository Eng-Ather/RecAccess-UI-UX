import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, GoBackBtn, InputField, Txt} from '../Components';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const ForgetPassword01 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.btnContainer}>
          <GoBackBtn />
          <Txt children={'Forget Password'} />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.mailContainer}>
          <Txt
            styles={styles.text}
            size={16}
            children={
              'Enter the email associated with your account and we\u2019ll send an email with instructions to reset your password.'
            }
          />
          <View style={styles.emailContainer}>
            <Txt styles={styles.email} size={20} children={'Email address'} />
            <InputField placeholder={'Enter your email'} />
          </View>
          <View style={styles.btn}>
            <Button clr="white" buttonText="Send " />
            <TouchableOpacity onPress={() => navigation.navigate('Login1')}>
              <Txt
                styles={styles.backline}
                children={'Back to sign in'}
                size={14}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgetPassword01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24, 31, 50, 0.14) 100%)',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 'auto',
    width: SCREEN_WIDTH / 1.1,
  },
  container2: {
    flex: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH / 1.5,
    gap: 40,
  },
  mailContainer: {
    flex: 1,
    margin: 'auto',
    width: SCREEN_WIDTH / 1.1,
  },
  text: {
    marginVertical: 24,
  },
  emailContainer: {
    gap: 12,
  },
  email: {
    alignSelf: 'flex-start',
  },
  btn: {
    marginVertical: 40,
  },
  backline: {
    marginTop: 50,
  },
});
