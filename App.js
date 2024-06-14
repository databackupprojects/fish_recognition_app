import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import Home from './src/Screens/Homescreen/Home';
import Splash from './src/Screens/Splashscreen/Splash';
import Collection from './src/Screens/CollectionScreen/Collection';
import Gallery from './src/Screens/GalleryScreen/Gallery';
import SuccessfulScreen from './src/Screens/PicSuccessful/SuccessfulScreen';
import BOttomTab from './src/BottomStack/BottomNavigator';
import Cemra from './src/Screens/Camera/CameraScreen';
import SearchResult from './src/Screens/SearchResultScreen/SearchResult';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isAppReady, setAppReady] = useState(false);

  // useEffect(() => {
  //   // Simulate app loading, e.g., fetching data, initializing resources
  //   setTimeout(() => setAppReady(true), 2000); // Set to true after 2 seconds
  // }, []);

  return (
   <View style={styles.container}>
     

     <NavigationContainer>
       <Stack.Navigator>
      
      

          <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{headerShown: false}}
        />
      <Stack.Screen
      name='BOttomTab'
      component={BOttomTab}
      options={{headerShown:false}} 
      />

<Stack.Screen
          name="Camera"
          component={Cemra}
          options={{headerShown: false}}
        />  

        {/* <Stack.Screen
        name='SearchResult'
        options={{headerShown:false}}
        component={SearchResult}
        
        /> */}
{/*       
        <Stack.Screen
      name='Collection'
      component={Collection}
      options={{headerShown:false}}
      />   

      


  <Stack.Screen
      name='Gallery'
      component={Gallery}
      options={{headerShown:false}}
      />  

 {/* <Stack.Screen
      name='SuccessfulScreen'
      component={SuccessfulScreen}
      options={{headerShown:false}}
      />   */}

      </Stack.Navigator> 


     </NavigationContainer>
    </View>


    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  
  }
})