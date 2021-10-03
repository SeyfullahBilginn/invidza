import React, { useContext, useState, useEffect } from 'react';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthProvider';
import { Provider } from "mobx-react";
import Navigation from './navigation';

import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux'
import { fetchFavCards, fetchInviterLists, setPersonData } from "../redux/actions/favCardsAction"

import ContactsStore from "../stores/ContactsStore";

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const dispatch = useDispatch();
    const state = useSelector((state) => state)

    const onAuthStateChanged = (user) => {
        setUser(user);
        dispatch(fetchFavCards())
        dispatch(setPersonData())
        // dispatch(fetchInviterLists())
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    // if (user) {
    //     return (
    //         // <NavigationContainer>
    //             <Provider ContactsStore={ContactsStore}>
    //                 <Navigation />
    //             </Provider>
    //     )
    // }else{
    //     // <NavigationContainer>
    //         return(
    //             <AuthStack />
    //         )
        
    // }
    return (
        <NavigationContainer>
            {user ? <Provider ContactsStore={ContactsStore}>
                <Navigation />
            </Provider>
                :
                <AuthStack />}
        </NavigationContainer>
    );
}
export default Routes;