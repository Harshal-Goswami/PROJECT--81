import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import IonIcons from 'react-native-vector-icons/IonIcons'
import {Feed} from "../screens/Feed";
import {Post} from "../screens/Post";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <TabNavigator
          screenOptions={({route })=>({
              tabBarIcon: ({ focuse, color, size}) =>{
                  let iconName;
                  if(route.name === "Feed"){
                      iconName = focused
                      ?'book'
                      :'book-outline';
                  }else if(route.name === 'Post'){
                      iconName = focused ? 'create' : 'create-outline';
                  }
                  return <IonIcons name={iconName} size={size} color={color} />;
              }
          })} 
          tabBarOptions={{
              activeTintColor:"tomato",
              inactiveTintColor:"gray"
          }}
        >
          <Tab.Screen name="Feed" component={Feed}/>
          <Tab.Screen name="Post" component={Post}/>
        </TabNavigator>
    )
}
export  default BottomTabNavigator