
import React, { useEffect, useState, useLayoutEffect, useReducer } from 'react';
import {
    StyleSheet, Alert, FlatList, BackHandler,
    StatusBar, ScrollView, Animated,
    SafeAreaView, RefreshControl
} from 'react-native';

import {
    Colors,
    AnimatableManager, View,
    Card, CardProps, Button,
    Text, Image, TouchableOpacity,
    ListItem,
    ColorSwatch
} from 'react-native-ui-lib';
// import {contactsStore} from "../stores/ContactsStore"; 

import { colors } from "../../shared/Colors"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getList, getLastItem } from '../../firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { trashIcon, addContactIcon, editUserIcon } from "../../assets/constants"
import BackOpacity from '../../shared/BackOpacity';
import MyActivityIndıcator from '../../shared/MyActivityIndicator';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions/favCardsAction";
function ListDetails({ route, navigation }) {

    const docName = route.params.docName;

    const dispatch = useDispatch();
    const inviterLists = useSelector((state) => state.list.inviterLists.lists)
    const [index, setİndex] = useState(null)
    const [inviters, setinviters] = useState([])
    // const inviters = [];
    // second params came from newListDetails s not working
    const [lastItem, setlastItem] = useState()
    const getLists = async () => {
        // await setinviters(InvitersData)
        var show = {};
        var idx = 0;
        inviterLists.map(list => {
            if (list.name === docName) {
                setİndex(idx);
                show = list;
                setinviters(show)
            }
            idx++;
        })
    }

    console.log("ListDetails")

    useEffect(async () => {
        getLists()
    }, [])

    // useEffect(() => {
    //     setlastItem(getLastItem(docName));

    // }, [])

    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 60)

    const translateY = diffClamp.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60]
    })
    const keyExtractor = item => item.phoneNumber;


    // const refreshFunction = async(listName) => {
    //     await getList(listName,getLists)
    // }
    // console.log(index)
    // if(index !== null) {

    return (
        <SafeAreaView

            style={{ flex: 1 }}
        // key={docName}
        >
            <StatusBar barStyle="default" backgroundColor={colors.darkViolet} />
            <Animated.View
                style={{
                    transform: [
                        { translateY: translateY }
                    ],
                    position: "absolute", top: 0, left: 0, right: 0,
                    elevation: 4, zIndex: 100
                }}
            >
                <View
                    backgroundColor={colors.lightViolet} height={60}
                    flexS row centerV
                    style={{ justifyContent: "space-between" }}
                >

                    <BackOpacity navigation={navigation} />
                    {/* <Text>{docName}</Text> */}
                    <Text marginH-10 text50 numberOfLines={1} style={{ flex: 1, color: "white", fontSize: 24 }}>{inviters.name}</Text>
                    <TouchableOpacity
                        marginH-15
                        row
                        center
                        activeOpacity={.5}
                        onPress={() => navigation.navigate("NewListDetails", { data: inviters.name })}
                    >
                        <Text text60 margin-5 style={{ fontSize: 16 }} color={Colors.white}>Edit</Text>
                        <Image source={editUserIcon} margin5 style={{ width: 22, height: 22, tintColor: Colors.white }} />
                        {/* <Text text60 margin-5 style={{fontSize:13}} color={Colors.white}>Add Contact</Text> */}
                    </TouchableOpacity>

                </View>
            </Animated.View>
            {
                (inviters.contacts) ? (

                    <View marginV-2 style={{}}>
                        <FlatList
                            style={{}}
                            ListHeaderComponent={
                                <View height={60}>
                                </View>
                            }
                            onScroll={(e) => {
                                scrollY.setValue(e.nativeEvent.contentOffset.y)
                            }}


                            initialNumToRender={12}
                            //when waiting next items, add activity indicator end of the page
                            maxToRenderPerBatch={20}
                            data={inviterLists[index].contacts}
                            keyExtractor={keyExtractor}
                            renderItem={({ item }) => {
                                return (
                                    <Card
                                        key={item.phoneNumber}
                                        marginV-3 marginH-10
                                        padding-5 absB center row
                                        style={{
                                            justifyContent: "space-between", elevation: 2,
                                        }}
                                        onPress={() => { }}
                                    >
                                        <View style={{ elevation: 2 }}>
                                            <Text text60 grey10 margin-5 >{item.givenName} {item.familyName}</Text>
                                            <Text text80 grey30 margin-5>{item.phoneNumber}</Text>
                                        </View>
                                        <TouchableOpacity style={{ margin: 5 }}
                                            onPress={() => {
                                                // deleteContact(docName,item)
                                                dispatch(deleteContact(docName, item))
                                            }
                                            }
                                        >
                                            <Image
                                                source={trashIcon}
                                                style={{ height: 25, width: 25, tintColor: Colors.grey30 }}
                                            />

                                        </TouchableOpacity>
                                    </Card>
                                )
                            }}
                        />

                    </View>
                )
                    :
                    (
                        <MyActivityIndıcator />
                    )
            }
            {/* add contact icon */}
            <TouchableOpacity
                activeOpacity={0.7}

                style={{
                    elevation: 6, position: "absolute", bottom: 20,
                    alignSelf: "center", justifyContent: "center", alignItems: "center",
                    alignContent: "center", borderRadius: 35, opacity: 0.9,
                    backgroundColor: Colors.green10, width: 70, height: 70
                }}
                onPress={() => { navigation.navigate("ContactsScreen", { inviters }) }}
            >
                <Image source={addContactIcon} tintColor="white" width={36} height={36} />
            </TouchableOpacity>
        </SafeAreaView>
    );
    // } else{
    //     return(
    //         <MyActivityIndıcator />
    //     )
    // }

};


export default ListDetails;
