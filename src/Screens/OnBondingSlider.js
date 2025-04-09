import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  onBonding01Img,
  onBonding02Img,
  OnBonding03Img,
} from '../Constants/Images';
import {Button, Txt} from '../Components';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const slides = [
  {
    id: '1',
    image: onBonding01Img,
    title: 'Meet people with same interests',
    subtitle:
      'Reccess gives you opportunity to bond with people with same interests    ',
  },
  {
    id: '2',
    image: onBonding02Img,
    title: 'Say hi to your new crew!',
    subtitle: 'Reconnect with the outdoors through reccess!',
  },
  {
    id: '3',
    image: OnBonding03Img,
    title: 'See who\u2019s hosting events nearby!',
    subtitle: 'Find and attend events that fuel your passion',
  },
];

const OnboardingSlider = () => {
  const flatListRef = useRef();
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(prev => prev + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={item.image} style={styles.img} />
      </View>
      <View style={styles.container2}>
        <View
          style={{
            width:
              currentIndex === 0
                ? 190
                : currentIndex == 1
                ? '100%'
                : currentIndex == 2
                ? 210
                : '100%',
            marginVertical: 4,
          }}>
          <Txt children={item.title} />
        </View>

        <View style={{width: '90%', marginVertical: 8}}>
          <Txt
            size={14}
            weight="400"
            color="#888888"
            children={item.subtitle}
          />
        </View>
        <View style={{width: '100%', gap: 6}}>
          <Button
            fntweight="900"
            bgColor={currentIndex == 0 ? 'black' : 'white'}
            clr={currentIndex == 0 ? 'white' : 'black'}
            buttonText={currentIndex == 0 ? 'Continue' : 'Next'}
            onPress={
              currentIndex == 2
                ? () => navigation.navigate('Signup01')
                : handleNext
            }
          />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={slides}
      ref={flatListRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator
      keyExtractor={item => item.id}
      renderItem={renderItem}
      scrollEnabled={false}
    />
  );
};

export default OnboardingSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container1: {
    flex: 3,
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH / 1.4,
  },
});
