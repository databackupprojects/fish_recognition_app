import { Image, ScrollView, Modal, Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'

import SearchableDropdown from 'react-native-searchable-dropdown';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { filter } from 'lodash.filter'



import styles from './Style'

const Home = ({ navigation }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewVisible, setViewVisible] = useState(false);

  const handleTextChange = (text) => {
    setSearchQuery(text);
    setViewVisible(text.trim() !== '');

    if (text.trim() !== '') {
      const firstWord = text.trim().split(' ')[0].toLowerCase();
      const filteredData = searchResults.filter(item => item.name.toLowerCase().startsWith(firstWord));
      setFilteredItems(filteredData);
      if (filteredData.length === 0) {

        setFilteredItems([{ id: 0, name: 'No Result' }]);
      }
    } else {
      setFilteredItems([]);
    }
  };


  const searchResults = [
    { id: 1, name: 'Mackerel', imageUrl: require('../../assets/Images/Fish2.png'), description: '20/2/2024, 9:00 AM' },

    { id: 2, name: 'Redsnapper', imageUrl: require('../../assets/Images/Fish1.png'), description: '20/2/2024, 9:00 AM' },
    { id: 3, name: 'ThreadfinBream', imageUrl: require('../../assets/Images/Fish3.png'), description: '20/2/2024, 9:00 AM' },
    { id: 4, name: 'Markhor' },
    { id: 5, name: 'Mark' },
    { id: 6, name: 'Mar' },
    { id: 7, name: 'Markhorl' }, 
    { id: 8, name: 'Markhon' },






  ]

  return (


    <View style={{flex:1}}>


      <View style={styles.upercontainer}>
        <Text style={styles.text}>
          FishSnapID
        </Text>

      </View>




      <View style={styles.mainCaptureView}>
        <View style={styles.search} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

            <View style={styles.outerEffectView}>
              <TextInput
                value={searchQuery}
                onChangeText={handleTextChange}

                style={{ padding: 1 ,marginLeft:5}}
              />



            </View>

            <Image style={styles.image} source={require('../../assets/Images/Searchicon.png')} />

          </View>


        </View>
        {viewVisible && (
          <FlatList


            data={filteredItems}
            renderItem={({ item }) => (
              <View  style={{paddingHorizontal:10}}>
                <TouchableOpacity onPress={() => {
                  if (item.id !== 0) {
                    navigation.navigate('SearchResult', { item: item });
                  }
                }}>
                  <Text style={styles.result}>{item.name}</Text>
                </TouchableOpacity>
                <View  style={{width:"95%",borderWidth:0.5,borderColor:"gray",marginTop:10}}/>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            style={styles.flatList}
          />
        )}

        
      </View>


      {/* <View style={{ alignSelf: 'center', flex: 1 }}>
        
      </View> */}

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
  )
}

export default Home

