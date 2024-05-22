import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../app/index_style'

const TopActions = () => {
  return (
    <View style={styles.topActions}>
    <Text style={styles.featuredtext}>Top Action Games</Text>
    <Text style={styles.seeAll}>See all</Text>
  </View>
  )
}

export default TopActions