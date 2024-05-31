import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, Image, TextInput } from 'react-native'
import React from 'react'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Close from 'react-native-vector-icons/AntDesign';

import styles from './Style'
import LinearGradient from 'react-native-linear-gradient';

const SuccessfulScreen = ({ visible, closeModal, imageURl }) => {
    return (
        <View style={styles.container}>
            {/* Modal component to display identification success message */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        {/* Close button to dismiss the modal */}
                        <View style={{ top: responsiveHeight(-5), width: responsiveWidth(90) }}>
                            <TouchableOpacity style={styles.icon1} onPress={() => closeModal()}>
                                <Close name="closecircle" size={25} color="#F81111" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text}>
                            Identification Successful!
                        </Text>
                        {/* Display the image of the identified fish */}
                        <Image
                            source={imageURl ? { uri: imageURl } : require('../../assets/Images/Fish1.png')}
                            style={styles.image}
                        />
                        {/* Display fish information */}
                        <View>
                            <View style={{ flexDirection: 'row', width: responsiveWidth(70) }}>
                                <Text style={{ color: '#0071A2' }}>
                                    Local name:
                                </Text>
                                <Text style={{ color: '#11B3F8' }}>
                                    Merah
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: responsiveWidth(70) }}>
                                <Text style={{ color: '#0071A2' }}>
                                    English name:
                                </Text>
                                <Text style={{ color: '#11B3F8' }}>
                                    Redsnapper
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: responsiveWidth(70) }}>
                                <Text style={{ color: '#0071A2' }}>
                                    Scientific name:
                                </Text>
                                <Text style={{ color: '#11B3F8' }}>
                                    Lutjanuscampechanus
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: responsiveWidth(70) }}>
                                <Text style={{ color: '#0071A2', fontSize: 12, fontWeight: '700' }}>
                                    Date and time of fish capture:
                                </Text>
                                <Text style={{ color: '#11B3F8', fontSize: 12, fontWeight: '700' }}>
                                    20/2/2024, 10:00 AM.
                                </Text>
                            </View>
                        </View>
                        {/* Prompt to enter the location of image capture */}
                        <View style={{ margin: 10, width: responsiveWidth(90) }}>
                            <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#0071A2' }}>
                                Please enter the location where the image was taken:
                            </Text>
                        </View>
                        {/* TextInput for entering the location */}
                        <View style={styles.box}>
                            <TextInput />
                        </View>
                        {/* Save button to save the entered information and close the modal */}
                        <TouchableOpacity onPress={() => closeModal()} style={styles.button}>
                            <Text style={styles.save}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuccessfulScreen
