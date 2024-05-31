import { StyleSheet, Image,View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Home from '../Screens/Homescreen/Home';
import Cemra from '../Screens/Camera/CameraScreen';
import Collection from '../Screens/CollectionScreen/Collection';
import { useRoute } from '@react-navigation/native'
import Splash from '../Screens/Splashscreen/Splash';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
 
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false, 
        style:{
          borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }
      }}

      // screenOptions={{
      //   tabBarShowLabel: false,
      //   tabBarStyle: {
      //     display: 'flex',
      //   },
      // }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/Images/HomeIcon.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#11B3F8' : '#D9D9D9',
              }}
            />
          ),
          // tabBarLabel: null, // Hide the label for this tab
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Cemra}
        
        
        options={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
          
          

          tabBarIcon: (props) => <View style={{
            borderRadius: 100,
            borderWidth: 10,
            borderColor: 'white',
            position: 'absolute',
            padding:10,
            bottom: 8, // space from bottombar
            backgroundColor: props.focused ? 'green' : '#11B3F8',
        }}>
            <AntDesign name="camerao" color="white" size={40} /></View>

          
        }}
      />
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/Images/user.png')}
              style={{
                width: 23,
                height: 23,
                tintColor: focused ? '#11B3F8' : '#D9D9D9',
              }}
            />
          ),
          tabBarLabel: null, // Hide the label for this tab
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;




