import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { styles } from './styles';

export default function AppView(props) {

  const [ghost, setGhost] = useState(String.fromCodePoint(parseInt('1F47B', 16)))
  const [poo, setPoo] = useState(String.fromCodePoint(parseInt('1F4A9', 16)))
  const [bomb, setBomb] = useState(String.fromCodePoint(parseInt('1F4A3', 16)))
  const [question, setQuestion] = useState(String.fromCharCode(63))
  const [text, setText] = useState('')
  const [score, setScore] = useState(0)


  const renderScore = () => {

    const { element } = props
    setText(element)

    if(score >= 0 && score <= 10)
    {
      if(element == ghost)
      {
        setScore(score - 2)
      }
      else if(element == poo)
      {
        setScore(score - 1)
      }
      else if(element == bomb)
      {
        setScore(0)
        //Navigate to Fail
      }
      else{
        setScore(score + 1)
      }
    }
    else{
      console.log('winner')
      //Success screen
    }
  }

  return (
      <TouchableOpacity style={[styles.container, text ? props.style: {backgroundColor: 'black', opacity: 0.8}]} onPress={() => renderScore()}>
        <Text style={styles.elementText}>{text ? text : question}</Text>
      </TouchableOpacity>
  )
}