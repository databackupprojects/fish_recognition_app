import { Button, StyleSheet } from "react-native"
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const styles = StyleSheet.create({


  bgimage: {
    flex: 1,
    // backgroundColor:'red'
  },
  bottomcontainer: {
    flex:0.3,
    // 

  },
  collectionview: {
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: responsiveHeight(12),
    borderTopStartRadius: 12,
    borderTopEndRadius: 12

  },
  collectiontext: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)'
  },
  View1: {
    
    width: responsiveWidth(40),
    height: responsiveHeight(28),
    backgroundColor: '#ffffff',
    borderRadius: responsiveWidth(3),
    // marginTop: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


  },
  flatlistview: {
    // flex: 1,
    // // justifyContent:'center',
    // alignItems: 'center',
  
   
  },
  scrollBar: {
    position: 'absolute',
    marginTop: responsiveHeight(30),
    right: 0,
    width: 10, // Set scrollbar width
    borderRadius: 8,
    // justifyContent:'center'


  },
  scrollThumb: {
    backgroundColor: 'white', // Set thumb color
    width: '90%',
    borderRadius: 2,



  },
  des: {
    fontSize:responsiveFontSize(1.4),
    color: '#11B3F8',
    // marginLeft:4
  },
  
  des1: {
    fontSize:responsiveFontSize(1.4),
    color: '#0071A2',
    // marginLeft:2,
    textAlign: 'justify'
    
  },
  mainview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
    marginBottom:5
  },
  icon: {
    alignSelf: 'flex-start',
    // marginTop: 10
  },
  modalview: {
    marginTop:responsiveHeight(5),
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: responsiveWidth(90),
    height: responsiveHeight(92),
    // flex:1
  },
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(30)
  },
  closeButton: {
    position: 'absolute',
    
    right: 20,
  },
 
  imagePlus:{
   marginTop:responsiveHeight(5),
   width:30,
   height:30
  },
  imageother:{
    width:'80%',
    // height:130

  },
  textcapture:{
    color:'rgba(0, 113, 162, 1)'
  }
  



})

export default styles