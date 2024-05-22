import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heart from '../assets/icons/heart'
import Download from '../assets/icons/download'
import { styles } from '../app/index_style'
import Star from '../assets/icons/star'

const Card = ({source , Name}) => {
  return (
    <View style={styles.Card}>
    <Image source={source} style={styles.Image}/>
    <View style={styles.blur}></View>
    <View style={styles.Heart}><Heart/></View>
    <View style={styles.content}>
      <View style={styles.Stars}>
      <Star/><Star/><Star/><Star/><Star/>
      </View>
      <Text style={styles.Name}>{Name}</Text>
      <View style={styles.Stars}>
        <Download/>
        <Text style={styles.Downloads}>100k Downloads</Text>
      </View>
    </View>
  </View>
  )
}

export default Card
