import { Button, StyleSheet } from "react-native"
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
 maincontainer:{
    flex:1
 },
 upercontainer:{
    flex:0.8,
    backgroundColor:'red'
 },
 bottomcontainer:{
    flex:0.11,
    backgroundColor:'white',
    alignItems:'center',
    borderTopStartRadius:20,
    borderTopEndRadius:20
 },
 Imageview:{
    flexDirection:'row',
 },
 image1:{
  width:responsiveWidth(55),
  alignItems:'flex-end',
  bottom:20,
  marginLeft:5
 },
 image2:{
width:responsiveWidth(35),
alignItems:'flex-end',
marginTop:responsiveHeight(3)
 },
 camera: {
 },
 container: {
 },
 buttonContainer: {
 },
 modalContainer: {
   flex: 0.9,
 },
 previewImage: {
 },
 
 closeButton: {
 },
 closeButtonText: {
 },
 text:{
   fontSize:responsiveFontSize(2),
   fontWeight:"500",
   color:'#0071A2',
   textAlign: 'justify'
 },
 buttonmainview:{
  flex:0.1,
 alignItems:'center',
 marginTop:5
 },
 button:{
   width:responsiveWidth(70),
   height:responsiveHeight(7),
   backgroundColor:'#11B3F8',
   borderRadius:responsiveWidth(20),
   justifyContent:'center'
 },
 modalmainview:{
  flex: 1, 
  justifyContent: 'center',
   alignItems: 'center', 
   backgroundColor: 'rgba(0, 0, 0, 0.5)'
 }
})
export default styles