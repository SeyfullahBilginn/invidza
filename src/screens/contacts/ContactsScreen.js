import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet, Alert, FlatList, View, Text, SafeAreaView,
    StatusBar, ScrollView, TouchableOpacity, Image,
    Dimensions, Animated, RefreshControl, KeyboardAvoidingView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from "../../shared/Colors"
import { Assets, Colors, Spacings, Typography, Button, Keyboard, Incubator } from 'react-native-ui-lib'; //eslint-disable-line
import { Searchbar } from 'react-native-paper';
// import ignoreWarnings from 'react-native-ignore-warnings';

import Contacts from 'react-native-contacts';
import ContactCard from "../../shared/ContactCard2";

import { contactsStore } from '../../stores/ContactsStore';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import { createList } from "../../firebase/firestore";
// import {getSpecificInvitersLists} from "../../firebase/firestore"; 

import { leftIcon, rightIcon, refreshIcon } from "../../assets/constants"
import { useDispatch, useSelector } from "react-redux";

const win = Dimensions.get("window");
export default function ContactsScreen({route,navigation}) {

    // const dispatch = useDispatch();
    const allContacts = useSelector((state) => state.list.allContacts)
    // const state = useSelector((state) => state.list)
    
    console.log("state")
    // console.log(state)
    // console.log(allContacts)
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         onEdit: false,
    //         updating: false,
    //         contacts: [],
    //         list: [],
    //         searching: false,
    //         curY: new Animated.Value(0),
    //         num: 0,
    //         query: "",
    //         editable: this.props.route.params,
    //         editableListName: ""
    //     };
    // }
    const [onEdit, setOnEdit] = useState(false)
    // const [updating, setUpdating] = useState(false)
    const [contacts, setContacts] = useState([])
    const [list, setList] = useState([])
    const [searching, setSearching] = useState(false)
    const [curY, setCurY] = useState(new Animated.Value(0))
    const [num, setNum] = useState(0)
    const [query, setQuery] = useState("")
    const [editable, setEditable] = useState(route.params)
    const [editableListName, setEditableListName] = useState("")

    // componentDidMount() {
    //     contactsStore.emptyList();
    //     // initialize contact state 
    //     // setContacts(c)
    //     // this.setState({ contacts: contactsStore.getAllContacts() })
    //     if (editable) {
    //         const { inviters } = this.props.route.params;
    //         console.log("inviters: ");
    //         // console.log(inviters)
    //         setEditableListName(inviters.name)
    //         // this.setState({ editableListName: inviters.name })

    //         var contacts = [];
    //         console.log(contactsStore.getAllContacts())
    //         contactsStore.getAllContacts().map(element => {
    //             inviters.contacts.map(contact => {
    //                 if (contact.givenName === element.givenName &&
    //                     contact.familyName === element.familyName &&
    //                     contact.phoneNumber === element.phoneNumber) {
    //                     console.log("İİİİİFFFF")
    //                     element.pressed = true;
    //                     contacts.push(element);

    //                     // add contactsStore
    //                     contactsStore.addContact({
    //                         givenName: element.givenName,
    //                         familyName: element.familyName,
    //                         phoneNumber: element.phoneNumber
    //                     })
    //                 }
    //             })
    //         });
    //         // initialize total number of added contacts
    //         setNum(contacts.length)
    //         // this.setState({ num: contacts.length })
    //     }
    // }
    useEffect(() => {
        console.log("editable: " + editable)
        console.log(editable)
        contactsStore.emptyList();
        // initialize contact state 
        // setContacts(c)
        // this.setState({ contacts: contactsStore.getAllContacts() })
        if (editable) {
            const { inviters } = route.params;
            console.log("inviters: ");
            // console.log(inviters)
            // setEditableListName(inviters.name)
            // this.setState({ editableListName: inviters.name })

            // var contacts = [];
            var editedContacts = []
            editedContacts = allContacts;
            console.log(contactsStore.getAllContacts())
            contactsStore.getAllContacts().map(element => {
                inviters.contacts.map(contact => {
                    if (contact.givenName === element.givenName &&
                        contact.familyName === element.familyName &&
                        contact.phoneNumber === element.phoneNumber) {
                        console.log("İİİİİFFFF")
                        element.pressed = true;
                        contacts.push(element);

                        // add contactsStore
                        contactsStore.addContact({
                            givenName: element.givenName,
                            familyName: element.familyName,
                            phoneNumber: element.phoneNumber
                        })
                        
                        editedContacts.push({
                            givenName: element.givenName,
                            familyName: element.familyName,
                            phoneNumber: element.phoneNumber
                        })
                        
                    }
                })
            });
            console.log("set")
            console.log(allContacts)
            setContacts(editedContacts)
            // initialize total number of added contacts
            // setNum(contacts.length)
            // this.setState({ num: contacts.length })
        }
    }, [])
    function handleCallback (childData)  {
        //eklendi
        childData.pressed === true ?
        setNum(num + 1)
            // this.setState({ num: this.state.num + 1 })
            :
            setNum(num - 1)
            // this.setState({ num: this.state.num - 1 })
    }


    const keyExtractor = item => item.recordID;


    // render() {


        const scrollY = new Animated.Value(0)
        const diffClamp = Animated.diffClamp(scrollY, 0, 110)



        const translateY = diffClamp.interpolate({
            inputRange: [0, 110],
            outputRange: [0, -110]
        })


        const handleSearch = (text) => {
            setQuery(text)
            // this.setState({ query: text })
            const newData = contactsStore.search(text);
            setContacts({contacts: newData, searching: true})
            // this.setState({ contacts: newData, searching: true })
        }

        const handleLeftIcon = () => {
            navigation.pop()
            contactsStore.emptyPressedContacts();
        }


        const save = async () => {
            createList(contactsStore.contacts, editableListName)
            contactsStore.emptyPressedContacts();

            navigation.pop()
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey70 }}>

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
                        style={{
                            backgroundColor: colors.lightViolet,
                            elevation: 4, zIndex: 100, height: 90
                        }}>

                        <View style={{
                            flexDirection: "row", justifyContent: "space-between",
                            alignItems: "center", marginVertical: 15, height: 30
                        }}>
                            <TouchableOpacity
                                hitSlop={{ right: 12, left: 12, bottom: 12, top: 12 }}
                                activeOpacity={.5}
                                style={{ justifyContent: "center", marginHorizontal: 20 }}
                                onPress={handleLeftIcon}
                            >
                                <Image source={leftIcon} style={{ width: 16, height: 16, tintColor: "white" }} />
                            </TouchableOpacity>

                            <View style={{
                                alignItems: "flex-start",
                                marginHorizontal: 20, position: "absolute", left: 36
                            }}>
                                <Text style={{ color: "white", fontSize: 20 }}>
                                    {editable ?
                                        editableListName
                                        :
                                        (
                                            "New List"
                                        )
                                    }
                                </Text>
                                {
                                    num == 0 ?
                                        <Text style={{ color: "white", fontSize: 14 }}>Add New Contact</Text>
                                        :
                                        <Text style={{ color: "white", fontSize: 14 }}>Added {num} people</Text>
                                }
                            </View>
                            {
                                editable ?
                                    (
                                        <TouchableOpacity
                                            activeOpacity={.5}
                                            style={{
                                                marginHorizontal: 20, justifyContent: "center",
                                                alignSelf: "center"
                                            }}
                                            onPress={save}>
                                            <Text style={{
                                                color: Colors.white, fontSize: 18,
                                                fontWeight: "bold"
                                            }}>
                                                Save
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                    :
                                    (
                                        <View style={{ flexDirection: "row" }}>
                                            {/* <TouchableOpacity
                            hitSlop={{right:12,left:12,bottom:12,top:12}}
                            activeOpacity={.5}
                            style={{justifyContent:"center",marginHorizontal:20}}
                            onPress = {() => {this.props.navigation.navigate("NewListDetails",{data:null})}}
                            >
                                <Image source={refreshIcon} style={{width:16,height:16,tintColor:"white"}} />
                            </TouchableOpacity> */}

                                            <TouchableOpacity
                                                hitSlop={{ right: 12, left: 12, bottom: 12, top: 12 }}
                                                activeOpacity={.5}
                                                style={{ justifyContent: "center", marginHorizontal: 20 }}
                                                onPress={() => { navigation.navigate("NewListDetails", { data: null }) }}
                                            >
                                                <Image source={rightIcon} style={{ width: 16, height: 16, tintColor: "white" }} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                            }
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Searchbar
                                style={{
                                    borderBottomWidth: 0.1, borderColor: colors.lightViolet, height: 50, width: "100%",
                                    borderBottomRightRadius: 6, borderBottomLeftRadius: 6
                                }}
                                iconColor={colors.lightViolet}
                                placeholder="Search"
                                onChangeText={handleSearch}
                            // onChangeText={onChangeSearch}
                            // value={searchQuery}
                            />
                        </View>
                    </View>
                </Animated.View>
                <FlatList
                    ListHeaderComponent={
                        <View style={{ height: 110 }}>
                        </View>
                    }
                    onScroll={(e) => {
                        scrollY.setValue(e.nativeEvent.contentOffset.y)
                    }}

                    // initialNumToRender={10}
                    // updateCellsBatchingPeriod={50}
                    // maxToRenderPerBatch={25}
                    data={contacts}
                    renderItem={({ item }) =>
                        <ContactCard
                            parentCallback={handleCallback}
                            item={item}
                            query={searching ? query : null}
                        />
                    }
                    keyExtractor={keyExtractor}

                >
                </FlatList>

            </SafeAreaView>


        );
    // }
}

const styles = StyleSheet.create({
    arrow_forward: {
        position: "absolute",
        alignSelf: "flex-end", bottom: 20, right: 20,
        elevation: 1, borderRadius: 30, height: 60, width: 60, backgroundColor: Colors.white,
        shadowColor: Colors.black, shadowOpacity: 2
    }
});