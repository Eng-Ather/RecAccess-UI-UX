import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenLayout from '../Constants/ScreenLayout';
import {onBonding01Img, onBonding02Img, OnBonding03Img } from '../Constants/Images';
import Typography from '../Constants/Typography';
import { Heading, Button } from '../Components';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: onBonding01Img,
    title: 'Meet people with same interests',
    subtitle: 'Reccess gives you opportunity to bond with people with same interests    ',
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
    title: 'See who is hosting events nearby!',
    subtitle: 'Find and attend events that fuel your passion',
  },
];

const OnboardingSlider = () => {
  const flatListRef = useRef();
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(prev => prev + 1);
    } else {
      navigation.navigate('Login'); // ya koi bhi next screen
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.slide, ScreenLayout.container]}>
      <Image source={item.image} style={styles.img} />
      <View style={{ height: 72 }}>
        <Heading children={item.title} />
      </View>
      <View style={{ width: 255, height: 65 }}>
        <Text style={[Typography.plainText, { textAlign: 'center' }]}>
          {item.subtitle}
        </Text>
      </View>
      <View style={{ marginTop: 24, width: '90%' }}>
        <Button
          fntweight="900"
          bgColor={currentIndex == 0 ? "black" : "white"}
          clr={currentIndex == 0 ? "white" : "black"}
          buttonText={currentIndex == 0 ? "Continue" : "Next"}
          onPress={currentIndex == 2 ? ()=> navigation.navigate("Login1")  : handleNext}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={slides}
      ref={flatListRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      scrollEnabled={false} // user swipe disable, only via "Next"
    />
  );
};

export default OnboardingSlider;

const styles = StyleSheet.create({
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  img: {
    margin: "auto",
    resizeMode: "contain"
  }
});
