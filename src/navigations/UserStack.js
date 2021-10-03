import React from 'react';
import {
Dimensions, View,Text,Image
} from 'react-native';
import { createStackNavigator  } from "@react-navigation/stack";
const Stack = createStackNavigator();
import EditUser from "../screens/User/EditUser"

import ContactList from "../screens/contacts/ContactLists"
import User from '../screens/User/User';
import LoginPage from '../screens/User/LoginPage';
import SignUpPage from '../screens/User/SignUp';
import Favourites from "../screens/User/Favourites"
import InvitationCardDetail from '../screens/categories/InvitationCardDetail';
// const templateimport Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from "../shared/Colors" 
const leftIcon = require('../assets/icons/left-512.png');

function ExploreStack() {
    return(
    <Stack.Navigator initialRouteName="User" headerMode="none" >
        <Stack.Screen name="User" component={User}/>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignUpPage} />
        <Stack.Screen name="EditUser" component={EditUser} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="InvitationCardDetail" component={InvitationCardDetail}  />

    </Stack.Navigator>)
}

export default ExploreStack