import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const StartScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#f4845f'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Card Bomb</Text>
        <Text style={styles.subheaderText}>Let's use your brain</Text>
      </View>
      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/bomb.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txt}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;
