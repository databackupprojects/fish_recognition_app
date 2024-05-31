import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, Image, TouchableOpacity, Text,Alert } from 'react-native';

import {  launchImageLibrary } from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import Close from 'react-native-vector-icons/AntDesign';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './Style';
import SuccessfulScreen from '../PicSuccessful/SuccessfulScreen';

const Camera = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const[Fishmodal,setFishmodal]=useState(false)
  const [image,setImage]=useState("")
  const cameraRef = useRef(null);
  const [spinner, setSpinner] = useState(false);

  const CloseFishModal=()=>{
    setFishmodal(false)
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const openGallery =async() => { 
    const options = {
       mediaType: 'photo', 
      };
   launchImageLibrary(options,async (response) => { 
    if (response.didCancel){ 
      console.log('User cancelled image picker');
     }
     else if (response.errorCode){
       console.log('ImagePicker Error: ', response.errorCode);
       }
      else if (response.assets && response.assets.length > 0) { 
        const { uri } = response.assets[0]; 
        console.log('Selected image URI: ', uri);
        await uploadImage(uri);
    } 
  });
 };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = {quality: 1.0, base64: true};
        const data = await cameraRef.current.takePictureAsync(options);
        await uploadImage(data.uri);
      } catch (error) {
        console.error(error);
      }
    }
  };

    const uploadImage = async uri => {
    setSpinner(true);
    const apiUrl = 'http://192.168.10.42:8000/detection/'; 
    const formData = new FormData();
    formData.append('input_image', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const responseData = await response.json();
      console.log('Upload :', responseData);
      if(responseData.status == 'success'){
        setFishmodal(true)
        setImage(responseData?.image_path)
        setSpinner(false);
      } 
      else {
        Alert.alert('Error!', responseData.error);
        setSpinner(false);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setSpinner(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.modalContainer}>
        <RNCamera
          ref={cameraRef}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message:
              'Need camera access for quick barcode scanning and online product search.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
           {
            Fishmodal == false && (
          <View style={{ flex: 1, marginTop: responsiveHeight(6) }}>
              <View style={{ position: 'absolute', marginLeft: responsiveWidth(5) }}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Close name="closecircle" size={25} color="#F81111" />
              </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', width: responsiveWidth(90), alignItems: 'flex-end', marginLeft: 10 }}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/Images/Question.png')} />
              </TouchableOpacity>
            </View>
          </View>
          )
        }
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles. modalmainview}>
              <View style={{flex:0.9, backgroundColor: 'white', padding: 20, borderRadius: 15, width: responsiveWidth(80), }}>
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{}}>
                      <Text style={{ marginTop: 10, color: '#11B3F8', fontSize: responsiveFontSize(3.8), fontWeight: '700' }}>
                        Snap Tips
                      </Text>
                    </View>
                    <View style={{width:responsiveWidth(25)}}>
                    <Image source={require('../../assets/Images/bulb.png')} />
                    </View>
                  </View>
                  <View style={{ width: responsiveWidth(60) }}>
                    <Text style={styles.text}>
                      1.Stable Positioning: Keep the camera steady and stable while taking photos. This reduces blur and ensures clear, sharp images, improving the app's ability to recognize fish species.
                    </Text>
                    <Text style={{ ...styles.text, marginTop: 5 }}>
                      2.Focus on the Fish: Center the fish in the frame and avoid cluttered backgrounds. This helps the app focus on the fish itself, improving identification accuracy.
                    </Text>
                    <Text style={{ ...styles.text, marginTop: 5 }}>
                      3.Clear Images: Ensure the fish is in focus and occupies a significant portion of the frame. Clear, high-resolution images provide better data for the app's identification algorithms
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonmainview}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <Text style={{ textAlign: 'center', color: 'white', fontSize: responsiveFontSize(2.5), fontWeight: '700' }}>
                        OK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <SuccessfulScreen    visible={Fishmodal}   closeModal={CloseFishModal} imageURl={image}/>
        </RNCamera>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.Imageview}>
          <View style={styles.image1}>
<View style={{
            borderRadius: 100,
            borderWidth: 10,
            borderColor: 'white',
            position: 'absolute',
            padding:10,
            backgroundColor:  '#11B3F8', 
        }}>
           <TouchableOpacity onPress={takePicture}>
            <Image
             style={{width:40,height:40}}   source={require('../../assets/Images/capture.png')}
              />
               </TouchableOpacity>
            </View>
      <Spinner
        visible={spinner}
        textContent={'Please Wait...'}
        textStyle={{color: 'white'}}
      />
          </View>
          <View style={styles.image2}>
        <TouchableOpacity  onPress={openGallery}>
        <Image
          style={{width:35,height:35}}
          source={require('../../assets/Images/Gallery.png')}
        />
      </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Camera;

































// import React, {useRef, useState} from 'react';
// import {StyleSheet, TouchableOpacity, View, Text, Alert} from 'react-native';
// import styles from './styles';
// import {RNCamera} from 'react-native-camera';
// import Spinner from 'react-native-loading-spinner-overlay';

// const CameraScreen = ({navigation}) => {
//   const cameraRef = useRef(null);
//   const [spinner, setSpinner] = useState(false);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       try {
//         const options = {quality: 1.0, base64: true};
//         const data = await cameraRef.current.takePictureAsync(options);
//         await uploadImage(data.uri);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

  // const uploadImage = async uri => {
  //   setSpinner(true);
  //   const apiUrl = 'http://192.168.10.42:8002/points_detection/'; // Replace with your backend URL
  //   const formData = new FormData();
  //   formData.append('input_image', {
  //     uri,
  //     name: 'photo.jpg',
  //     type: 'image/jpeg',
  //   });

  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     const responseData = await response.json();
  //     console.log('Upload successful:', responseData);

  //     if (responseData.status == 'failed') {
  //       Alert.alert('Error!', responseData.description);
  //     }
  //     else { 
  //       navigation.navigate('CornerPoints', {cornerPoints: responseData})
  //     }

  //     setSpinner(false);
  //   } catch (error) {
  //     console.error('Upload failed:', error);
  //     setSpinner(false);
  //   }
  // };

//   return (
//     <>
//       <RNCamera
//         ref={cameraRef}
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.on}
//         captureAudio={false}
//         autoFocus={RNCamera.Constants.AutoFocus.on}
//         androidCameraPermissionOptions={{
//           title: 'Permission to use camera',
//           message:
//             'Need camera access for quick barcode scanning and online product search.',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}
//       />

//       <TouchableOpacity
//         style={styles.clickBtn}
//         onPress={takePicture}></TouchableOpacity>

//       <Spinner
//         visible={spinner}
//         textContent={'Please Wait...'}
//         textStyle={{color: 'white'}}
//       />
//     </>
//   );
// };

// export default CameraScreen;