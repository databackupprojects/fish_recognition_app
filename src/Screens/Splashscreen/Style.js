import { Button, StyleSheet } from "react-native"
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const styles = StyleSheet.create({


    upercontainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'

    },
    bottomcontainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    bottonview: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        backgroundColor: 'rgba(17, 179, 248, 0.54)',
        borderRadius: responsiveWidth(15),
        alignItems: 'center',
        justifyContent: 'center',


    },
    background: {
        flex: 1
    },
    button: {
        width: responsiveWidth(24),
        height: responsiveWidth(24),
        borderRadius: responsiveWidth(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "#FFFFFF",
        fontSize: responsiveFontSize(6),
        fontWeight: "900"
    },
    text1: {
        color: "#FFFFFF",
        fontSize: responsiveFontSize(1.4),
        fontWeight: '700',
        marginTop: 15,
        transform: [{ rotate: '-1deg' }],

    },
    buttontext: {
        color: "#FFFFFF",
        fontSize: responsiveFontSize(2.5),
        fontWeight: '700',
        textAlign: 'center',


    }



})

export default styles