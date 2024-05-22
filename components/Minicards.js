import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MiniCard from './MiniCard'
import { styles } from '../app/index_style'

const Minicards = () => {
  return (
    <ScrollView style={styles.MiniCards}>
    <MiniCard source={require('../assets/images/frag.png')} Name="Frag"/>
    <MiniCard source={require('../assets/images/zooba.png')} Name="Zooba"/>
  </ScrollView>
  )
}

export default Minicards