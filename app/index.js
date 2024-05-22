import React from 'react'
import { styles } from './index_style'
import Topbar from '../components/Topbar'
import Title from '../components/Title'
import Buttons from '../components/Buttons'
import FeaturedText from '../components/FeaturedText'
import Cards from '../components/Cards'
import TopActions from '../components/TopActions'
import Minicards from '../components/Minicards'
import { View } from 'react-native'
const index = () => {
  return (
    <View style={styles.body}>
     <Topbar/>
      <Title/>
      <Buttons/>
      <FeaturedText/>
      <Cards/>
      <TopActions/>
      <Minicards/>
    </View>
  )
}

export default index
