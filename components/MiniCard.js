import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../app/index_style'
import DownloadGreen from '../assets/icons/downloadGreen'
import Star from '../assets/icons/star'

const MiniCard = ({source , Name}) => {
  return (
    <View style={styles.MiniCard}>
    <Image source={source} style={styles.miniImage}/>
    <View style={styles.contentMini}>
<Text style={styles.MiniName}>{Name}</Text>
<View style={styles.Stars}>
<Star/>
<Text style={styles.MiniDownloads}>4.5</Text>
<DownloadGreen/>
<Text style={styles.MiniDownloads}>10M</Text>
</View>
    </View>
    <Text style={styles.button}>button</Text>
  </View>
  )
}

export default MiniCard