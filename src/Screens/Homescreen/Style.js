import { Button, StyleSheet } from "react-native"
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const styles = StyleSheet.create({

    maincotainer: {
        flex: 1
    },
    upercontainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: " rgba(255, 255, 255, 10)",
        fontSize: responsiveFontSize(6),
        fontWeight: "900",

    },
    searchmainview: {
        flex: 0.2,
        alignItems: 'center',


    },
    search: {
        
        width: responsiveWidth(80),
        // height: responsiveHeight(8),
        padding:15,
        backgroundColor: '#ffffff', 
        borderRadius: responsiveWidth(5),
        // shadowColor: 'rgba(243, 243, 243, 1)',
        marginTop: 10,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    image: {
        width: responsiveWidth(8),
        // height: responsiveHeight(4),
        resizeMode: 'contain',
        marginLeft: 5
    },
    outerEffectView: {
        width: responsiveWidth(60),
        height: 15,
        backgroundColor: 'rgba(243, 243, 243, 1)', 
        borderRadius: 10, 
        marginTop:5,
        shadowColor: '#000',
       
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Elevation property for Android
        elevation: 5,
    },
    mainCaptureView:{
     flex:0.6,
     alignItems:'center'
    },
    CaptureView:{

        width: responsiveWidth(80),
        height: responsiveHeight(40),
        // padding:40,
        backgroundColor: '#ffffff', 
        borderRadius: responsiveWidth(5),
        marginTop: 10,
        alignItems:'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        
    },
    textcapture:{
        marginTop:5,
        color:'rgba(0, 113, 162, 1)'
    },
    fishimage:{
        width:'90%',
        height:'60%',
        marginTop:4
    }


})

export default styles