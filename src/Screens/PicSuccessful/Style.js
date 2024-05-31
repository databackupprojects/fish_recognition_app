   import { Dimensions,StyleSheet ,Button} from "react-native";


   import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


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
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
    
    // marginBottom:5
    
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    width:responsiveWidth(90),
    height:responsiveHeight(90),
    
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
  text:{
    fontSize:responsiveFontSize(3),
    fontWeight:'700',
    color:'#57CA71',
    marginTop:10
  },
  image:{
    width:responsiveWidth(70),
    height:responsiveHeight(30)
  },
  button:{
    width:responsiveWidth(50),
    height:responsiveHeight(5),
    backgroundColor:'#11B3F8',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginTop:responsiveHeight(5)
  },
  save:{
    color:'#FFFFFF',
    fontSize:responsiveFontSize(2),
    fontWeight:'700',
    
  },
  box: {
    width: responsiveWidth(75),
    height: responsiveHeight(14),
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, 
    
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    // height:responsiveHeight(2)
  },
  icon1: {
    alignSelf: 'flex-start',
    marginTop: 10
  }
  
});

export default styles