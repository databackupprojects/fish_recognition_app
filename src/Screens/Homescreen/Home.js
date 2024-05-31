import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'





import styles from './Style'

const Home = ({navigation}) => {
  const [value, setvalue] = useState('')

  return (
    <View style={styles.maincotainer}>

      <View style={styles.upercontainer}>
        <Text style={styles.text}>
          FishSnapID
        </Text>

      </View>


      <View style={styles.searchmainview}>
        <View style={styles.search} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image style={styles.image} source={require('../../assets/Images/Searchicon.png')} />
            <View style={styles.outerEffectView}>
              <TextInput
                value={value}
                onChange={(text) => setvalue(text)}


              />
            </View>

          </View>
        </View>



      </View>

      <View style={styles.mainCaptureView}>
      <TouchableOpacity onPress={() =>
              navigation.navigate('Collection')
            }>
        <View style={styles.CaptureView}>
          <Text style={styles.textcapture}>
            Recent Capture:
          </Text>
         
          <Image style={styles.fishimage} source={require('../../assets/Images/fish.png')} />
         
          <Text style={styles.textcapture}>
            ThreadfinBream
          </Text>

          <Text style={{ color: 'rgba(17, 179, 248, 1)' }}>
            20/2/2024, 11:00 AM
          </Text>
        </View>
   </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home

