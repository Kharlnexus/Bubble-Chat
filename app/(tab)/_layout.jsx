import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons, images } from '../../constants';

const TabIcon = ({ icon }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode='contain'
        className="w-6 h-6"
        style={{ tintColor: 'white' }} // Set icon color to white
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#60a5fa', // Set your desired color here
            
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'chat',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.chat} 
              />
            ),
          }}
        />
        
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.profile} 
              />
            ),
          }}
        />
        


        <Tabs.Screen
          name='phone'
          options={{
            title: 'phone',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.phone} 
              />
            ),
          }}
        />

        <Tabs.Screen
          name='people'
          options={{
            title: 'people',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.people} 
              />
            ),
          }}
        />

        
        
        
      </Tabs>
    </>
  );
};

export default TabLayout;
