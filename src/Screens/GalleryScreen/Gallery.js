import React, { useState } from 'react';
import { View, Button, Modal, Image, FlatList, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';


import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Eye from 'react-native-vector-icons/AntDesign';
  


import data from './Dummydata';

const Gallery= () => {
  const [modalVisible, setModalVisible] = useState(true);

  

  const renderItem = ({ item }) => {
    return(
       

                
                
                    

       <View style={{margin:10,backgroundColor:'#FFFFFF',width:responsiveWidth(30),height:responsiveHeight(20),justifyContent:'center',alignItems:'center',borderColor:'#11B3F8',borderWidth:4,borderRadius:5}}>
                     <Image source={item.imageUrl}  />
        </View>                

    )


  }
    
  

  return (
    <View style={styles.container}>
      {/* <Button title="Open Modal" onPress={() => setModalVisible(true)} /> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
        
          <View style={styles.modalView}>
            
                  <View style={{top:responsiveHeight(-4),width:responsiveWidth(92)}}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.icon}>
                        <Eye name="closecircle" size={25} color="#F81111" />
                    </TouchableOpacity>
                    </View>
          
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
            />
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const { width } = Dimensions.get('window');
const ITEM_SIZE = (width - 20) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width:responsiveWidth(90),
    height:responsiveHeight(80),
    
  },
  imageItem: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    margin: 5,
  },
  icon: {
    alignSelf: 'flex-start',
    // marginTop: 10
  },
  
});

export default Gallery;
