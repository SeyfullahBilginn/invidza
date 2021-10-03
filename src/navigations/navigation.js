import React from 'react';
import {
  Dimensions, View, Text
} from 'react-native';

import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from '@react-navigation/native';


import ContactsStack from "./ContactsStack"
import UserStack from "./UserStack"

import TabBar from "./tab-bar";
import TemplatesStack from './TemplatesStack';
import Category from '../screens/categories/Category';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  // const navigation = useNavigation();

  return (
    <Tab.Navigator initialRouteName="Templates"
      tabBar={props => <TabBar {...props} />} >
      <Tab.Screen name="Contacts" component={ContactsStack}
        options={({ route }) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            // getFocusedRouteNameFromRoute returns null while first rendering
            if ("ContactList" === routeName || routeName.length == 0) {
              return true
            } else return false;
          })(route)
        })}
      />
      <Tab.Screen name="Templates" component={TemplatesStack}
        options={({ route }) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            // getFocusedRouteNameFromRoute returns null while first rendering
            if ("Templates" === routeName || routeName.length == 0) {
              return true
            } else return false;
          })(route)
        })}
      />
      <Tab.Screen name="User" component={UserStack}
        options={({ route }) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            // getFocusedRouteNameFromRoute returns null while first rendering
            if ("User" === routeName || routeName.length == 0) {
              return true
            } else return false;
          })(route)
        })}
      />
    </Tab.Navigator>
  )
}


export default function Navigation() {

  return (
    //   <Tab.Navigator initialRouteName="Templates"
    //   tabBar={props => <TabBar {...props} />} >
    //   <Tab.Screen name="Contacts" component={ContactsStack}
    //     options={({ route }) => ({
    //       tabBarVisible: ((route) => {
    //         const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    //         // console.log("routeName: " + routeName)
    //         return ["ContactList"].includes(routeName) ? true : false

    //         // route ne dönüyor ??
    //       })(route)
    //     })}
    //   />
    //   <Tab.Screen name="Templates" component={TemplatesStack}
    //     options={({ route }) => ({
    //       tabBarVisible: ((route) => {
    //         const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    //         // console.log("routeName: " + routeName)
    //         return ["Templates"].includes(routeName) ? true : false

    //         // route ne dönüyor ??
    //       })(route)
    //     })}
    //   />
    //   <Tab.Screen name="User" component={UserStack}
    //     options={({ route }) => ({
    //       tabBarVisible: ((route) => {
    //         const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    //         // console.log("routeName: " + routeName)
    //         return ["User"].includes(routeName) ? true : false

    //         // route ne dönüyor ??
    //       })(route)
    //     })}
    //   />
    // </Tab.Navigator>
    // <NavigationContainer>
    <Tabs/>
    // <Stack.Navigator initialRouteName="Tabs" headerMode="none">
    //   <Stack.Screen name="Tabs" component={Tabs} />
    //   <Stack.Screen name="Category" component={Category} />


    // </Stack.Navigator>
    // </NavigationContainer>
  )
}