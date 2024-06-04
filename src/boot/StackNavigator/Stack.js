import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Home from '../../Screens/Homescreen/Home'
import SearchResult from '../../Screens/SearchResultScreen/SearchResult'

const Stack = createNativeStackNavigator();

const Result = () => {
  return (
    <View  style={{flex:1}}>
     

     
       <Stack.Navigator>
      
      

          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      <Stack.Screen
      name='SearchResult'
      component={SearchResult}
      options={{headerShown:false}} 
      />



      



 

      </Stack.Navigator> 


    
    </View>
  )
}

export default Result

