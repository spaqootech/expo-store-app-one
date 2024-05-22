import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../app/index_style'

const Buttons = () => {
  return (
    <View>    
<ScrollView horizontal style={styles.buttons}>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
        <Text style={styles.button}>button</Text>
      </ScrollView>
    </View>
  )
}

export default Buttons
