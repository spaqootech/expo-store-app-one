import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from '../assets/icons/menu'
import Bell from '../assets/icons/bell'
import { styles } from '../app/index_style'

const Topbar = () => {
  return (
    <View style={styles.topbar}>
    <Menu/>
    <Bell/>
  </View>
  )
}

export default Topbar
