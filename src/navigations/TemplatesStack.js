import React,{useEffect} from 'react';
import {
Dimensions, View,Text, TouchableOpacity
} from 'react-native';
import { createStackNavigator  } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';

import ContactList from "../screens/contacts/ContactLists"
import { TabBar, Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListDetails from '../screens/contacts/ListDetails';

import Templates from "../screens/categories/Templates"
import Category from '../screens/categories/Category';
import InvitationCardDetail from '../screens/categories/InvitationCardDetail';
import Draft from '../screens/categories/Draft';


function TemplatesStack({navigation,route}) {

// second way of hiding tabbar inside stack navigator
    // useEffect(() => {
    //   navigation.setOptions({
    //     tabBarVisible: ['Templates'].includes(routeName),
    //   });
    // }, [navigation, routeName]);
    return(
    <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Templates" component={Templates} />
        <Stack.Screen name="Category" component={Category}/>
        <Stack.Screen name="InvitationCardDetail" component={InvitationCardDetail}  />
        <Stack.Screen name="Draft" component={Draft} />

    </Stack.Navigator>)
}

export default TemplatesStack;