import { Button, StyleSheet } from "react-native"
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const styles = StyleSheet.create({

    maincotainer: {
        flex: 1,
        backgroundColor:'red'
    },
    upercontainer: {
        flex: 0.3,
        justifyContent: 'flex-end',
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
        // backgroundColor:'yellow'
        


    },
    search: {
        alignSelf:'center',
        width: responsiveWidth(80),
        height: responsiveHeight(8),
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
        // height:responsiveHeight(3),
        // padding:1,
        backgroundColor: 'rgba(243, 243, 243, 1)', 
       
        borderRadius: 10, 
        marginTop:2,
        shadowColor: '#000',
        
       
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Elevation property for Android
        elevation: 3,
    },
    mainCaptureView:{
     flex:0.5,
   
    alignItems:'center',
     justifyContent:'center',
    
    },
    CaptureView:{
       justifyContent:'center',
        width: responsiveWidth(80),
        height: responsiveHeight(40),
        // padding:40,
        backgroundColor: '#ffffff', 
        borderRadius: responsiveWidth(5),
        marginTop: 10,
        alignItems:'center',
        alignSelf:'center',
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
    },
    modalview: {
        marginTop:responsiveHeight(5),
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        width: responsiveWidth(40),
        height:responsiveHeight(15),
        
      },
      
  mainview1: {
    
    flex: 0.4,
    justifyContent: 'center',
    
    padding: 5,
    marginTop:responsiveHeight(13),
  
   
    
    alignSelf:'center'
   
  },
  flatList: {
    backgroundColor: 'white',
    width:responsiveWidth(45),
    // alignSelf:'center',
    height:responsiveHeight(13),
    top:responsiveHeight(18.2),
    position:'absolute',
    left:60,
    
    
    
    
    
  },
  result:{
    textAlign:'justify',
    fontSize:responsiveFontSize(1.9),
    color: '#11B3F8',
    marginLeft:5
  },
  
 

})

export default styles