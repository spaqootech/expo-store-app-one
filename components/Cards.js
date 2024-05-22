import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { styles } from '../app/index_style'

const Cards = () => {
  return (
    <View>
    <ScrollView horizontal style={styles.Cards}>
      <Card source={require('../assets/images/freeFire.png')} Name="Free Fire"/>
      <Card source={require('../assets/images/angryBirds.png')} Name="Angry Birds"/>
      </ScrollView>
    </View>
  )
}

export default Cards
