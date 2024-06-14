import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../Screens/Homescreen/Home';
import Cemra from '../Screens/Camera/CameraScreen';
import Collection from '../Screens/CollectionScreen/Collection';
import Splash from '../Screens/Splashscreen/Splash';
import Stack from '../boot/StackNavigator/Stack';
import Result from '../boot/StackNavigator/Stack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      // Customizing the tab bar options
      tabBarOptions={{
        showLabel: false, // Hide the labels for the tab items
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20, // Rounded top corners for the tab bar
        }
      }}
    >
      {/* Home Tab Screen */}
      <Tab.Screen
        name="Result"
        component={Result}
        options={{
          headerShown: false, // Hide the header for the Home screen
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/Images/HomeIcon.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#11B3F8' : '#D9D9D9', // Change color based on focus
              }}
            />
          ),
        }}
      />
      
      {/* Camera Tab Screen */}
      <Tab.Screen
        name="Camera"
        component={Cemra}
        options={{
          headerShown: false, // Hide the header for the Camera screen
          tabBarStyle: {
            display: "none", // Hide the tab bar for the Camera screen
          },
          tabBarIcon: (props) => (
            <View style={{
              borderRadius: 100,
              borderWidth: 10,
              borderColor: 'white',
              position: 'absolute',
              padding: 10,
              bottom: 8, // Space from bottom bar
              backgroundColor: props.focused ? 'green' : '#11B3F8',
            }}>
              <AntDesign name="camerao" color="white" size={40} />
            </View>
          )
        }}
      />
      
      {/* Collection Tab Screen */}
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          headerShown: false, // Hide the header for the Collection screen
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/Images/user.png')}
              style={{
                width: 23,
                height: 23,
                tintColor: focused ? '#11B3F8' : '#D9D9D9', // Change color based on focus
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
