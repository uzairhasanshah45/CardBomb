import React, { useState , useEffect } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, ScrollView, Modal, Dimensions } from 'react-native';
import { styles } from './style';
import { colors } from '../../config';
import { Element } from '../../components'
import elementsno from '../../shared/elementsno'
import elementsemoji from '../../shared/elementsemoji'
import LottieView from 'lottie-react-native';


const Home = (props) => {

  const itemno = elementsno.elementsno
  const itememoji = elementsemoji.elementsemoji

  const [renderItems, setRenderItems] = useState(0)
  const [score, setScore] = useState(0);


  useEffect(() => {
    itemShuffle()
  },[])

  /* ==================================== shuffle elements ============================*/

  const itemShuffle = () => {
    const array = []
    
    for(let i=0; i<itemno.length; i++)
    {
      array.push(String.fromCharCode(itemno[i].elementno))
    }

    for(let i=0; i<itememoji.length; i++)
    {
      array.push(String.fromCodePoint(parseInt (itememoji[i].elementemoji, 16)))
    }  

    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setRenderItems(array);
  };


  return (
    <View style={styles.mainView}>
        <SafeAreaView opacity={0.95} />
            {/* <ScrollView style={{ flexDirection: 'row'}}> */}

          
              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[0]} style={{ backgroundColor: colors.element1}}/>
                <Element element={renderItems[1]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[2]} style={{ backgroundColor: colors.element3}}/>
                <Element element={renderItems[3]} style={{ backgroundColor: colors.element4}}/>
                <Element element={renderItems[4]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[5]} style={{ backgroundColor: colors.element6}}/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[6]} style={{ backgroundColor: colors.element4}}/>
                <Element element={renderItems[7]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[8]} style={{ backgroundColor: colors.element1}}/>
                <Element element={renderItems[9]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[10]} style={{ backgroundColor: colors.element6}}/>
                <Element element={renderItems[11]} style={{ backgroundColor: colors.element3}}/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[12]} style={{ backgroundColor: colors.element3}}/>
                <Element element={renderItems[13]} style={{ backgroundColor: colors.element6}}/>
                <Element element={renderItems[14]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[15]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[16]} style={{ backgroundColor: colors.element1}}/>
                <Element element={renderItems[17]} style={{ backgroundColor: colors.element4}}/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[18]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[19]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[20]} style={{ backgroundColor: colors.element6}}/>
                <Element element={renderItems[21]} style={{ backgroundColor: colors.element4}}/>
                <Element element={renderItems[22]} style={{ backgroundColor: colors.element3}}/>
                <Element element={renderItems[23]} style={{ backgroundColor: colors.element1}}/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[24]} style={{ backgroundColor: colors.element1}}/>
                <Element element={renderItems[25]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[26]} style={{ backgroundColor: colors.element3}}/>
                <Element element={renderItems[27]} style={{ backgroundColor: colors.element4}}/>
                <Element element={renderItems[28]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[29]} style={{ backgroundColor: colors.element6}}/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[30]} style={{ backgroundColor: colors.element4}}/>
                <Element element={renderItems[31]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[32]} style={{ backgroundColor: colors.element1}}/>
                <Element element={renderItems[33]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[34]} style={{ backgroundColor: colors.element6}}/>
                <Element element={renderItems[35]} style={{ backgroundColor: colors.element3}}/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[36]} style={{ backgroundColor: colors.element3}}/>
                <Element element={renderItems[37]} style={{ backgroundColor: colors.element6}}/>
                <Element element={renderItems[38]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[39]} style={{ backgroundColor: colors.element1}}/>
                <Element element={renderItems[40]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[41]} style={{ backgroundColor: colors.element4}}/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Element element={renderItems[42]} style={{ backgroundColor: colors.element5}}/>
                <Element element={renderItems[43]} style={{ backgroundColor: colors.element2}}/>
                <Element element={renderItems[44]} style={{ backgroundColor: colors.element6}}/>
                <Element element={renderItems[45]} style={{ backgroundColor: colors.element4}}/>
                <Element element={renderItems[46]} style={{ backgroundColor: colors.element3}}/>
                <Element element={renderItems[47]} style={{ backgroundColor: colors.element1}}/>
            </View>

            {/* </ScrollView> */}
    </View>
  );
};

export default Home;
