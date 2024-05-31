import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import styles from './Style'

const Splash = ({ navigation }) => {
    return (
        // Background image for the splash screen
        <ImageBackground style={styles.background} source={require('../../assets/Images/intro.png')}>

            {/* Container for the upper part of the screen */}
            <View style={styles.upercontainer}>
                <Text style={styles.text}>
                    FishSnapID
                </Text>
                <Text style={styles.text1}>
                    Snap, Identify, Learn - Your Fish Species Guide
                </Text>
            </View>

            {/* Container for the bottom part of the screen */}
            <View style={styles.bottomcontainer}>
                <View style={styles.bottonview}>
                    {/* LinearGradient for the button background */}
                    <LinearGradient colors={['rgba(0, 179, 255, 1)', 'rgba(6, 179, 253, 0.65)', 'rgba(17, 179, 248, 0)']} style={styles.button}>
                        {/* TouchableOpacity for navigation to the next screen */}
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('BOttomTab')
                        }>
                            <Text style={styles.buttontext}>
                                GO!
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

        </ImageBackground>
    )
}

export default Splash
