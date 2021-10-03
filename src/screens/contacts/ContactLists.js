
import React, { useState, useEffect, Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    PermissionsAndroid,
    FlatList,
    Dimensions
} from 'react-native';
import { Text, View, TouchableOpacity, Image, Colors } from 'react-native-ui-lib';
import { LinearTextGradient } from "react-native-text-gradient";

import Icon from 'react-native-vector-icons/MaterialIcons';
import InviterList from "./InviterList";
import { colors } from "../../shared/Colors"
import Button from "../../buttons/Button"
import { getAllInvitersLists } from "../../firebase/firestore"
// import { deleteList } from "../../firebase/firestore"
import { listsStore } from '../../stores/ListsStore';
import { deleteList, fetchInviterLists } from '../../redux/actions/favCardsAction';

import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { observable } from 'mobx';
import { addListIcon } from "../../assets/constants"

import { useDispatch, useSelector } from "react-redux";
import MyActivityIndıcator from '../../shared/MyActivityIndicator';

const win = Dimensions.get("window")

function Contactlists({ navigation }) {


    const [inviters, setInviters] = useState([[]])

    const dispatch = useDispatch();
    const inviterLists = useSelector((state) => state.list.inviterLists)

    const fetchBlogs = async () => {

        // setInviters(await getAllInvitersLists())
        setInviters(inviterLists)
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            dispatch(fetchInviterLists());
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [inviters]);

    const handleChange = listName => {
        dispatch(deleteList(listName));

        fetchBlogs();
    }

    // if (!inviterLists.loading) {
    console.log("ContactList")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            {/* header */}
            <View height={60} backgroundColor={colors.lightViolet}
                row alignItems="center" style={{ justifyContent: "space-between" }}  >
                <Text color="white" text40 marginL-20>Lists</Text>
                <TouchableOpacity marginR-10 style={{ flexDirection: "row", alignItems: "center" }}

                    activeOpacity={.5}
                    onPress={() => { navigation.navigate("ContactsScreen") }}>
                    <Text text60 marginR-10 style={{ color: Colors.white, fontSize: 16 }}>Create List</Text>
                    <Image source={addListIcon} width={22} height={22} tintColor={Colors.white} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <StatusBar barStyle="default" backgroundColor={colors.darkViolet} />
                <Text
                    text60
                    style={{ marginHorizontal: 20, marginTop: 10, color: Colors.grey10 }}>
                    List Name
                </Text>
                {/* {
                        (!inviterLists.loading) ? ( */}
                <View style={{ marginTop: 10 }} >
                    {
                        inviterLists.lists.map((item, index) => {
                            return (
                                <View key={index} >
                                    <InviterList
                                        inviters={item} del={(data) => { handleChange(data) }} />
                                </View>
                            )
                        })
                    }
                </View>
                {/* ) : (<MyActivityIndıcator />)} */}
            </ScrollView>
        </SafeAreaView>
    );

    // } else {
    //     return (
    //         <MyActivityIndıcator />
    //     )
    // }
    // }

};
export default Contactlists;