import React from 'react';
import {
Dimensions, View,Text, TouchableOpacity
} from 'react-native';
import { createStackNavigator  } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';

import ContactList from "../screens/contacts/ContactLists"
import ListDetails from '../screens/contacts/ListDetails';
import ContactsScreen from '../screens/contacts/ContactsScreen';
import NewListDetails from '../screens/contacts/NewListDetails';

// function lists() {
//     return(
//         <Stack.Navigator >
//             <Stack.Screen name="ListDetails" component={ListDetails}/>
//             <Stack.Screen name="NewListDetails" component={NewListDetails}/>

//         </Stack.Navigator>
//     )
// }

function ContactsStack() {
    const navigation = useNavigation();
    return(
    <Stack.Navigator headerMode="none" >
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen}/>
        <Stack.Screen name="ListDetails" component={ListDetails}/>
        <Stack.Screen name="NewListDetails" component={NewListDetails}/>

    </Stack.Navigator>)
}


export default ContactsStack;