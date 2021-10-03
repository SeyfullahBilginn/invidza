import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollView, Button, StyleSheet, SafeAreaView, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import Mybutton from "../../buttons/Button"
import { __SignOut } from '../../firebase/authentication';
import { TouchableOpacity, Text, Image, View, Colors } from "react-native-ui-lib";
import { colors } from '../../shared/Colors';
import {
    logOutIcon, editUserIcon, favouriteIcon,
    paymentIcon, linkedAccountsIcon, settingsIcon
} from "../../assets/constants"
import AwesomeAlert from 'react-native-awesome-alerts';
import auth from "@react-native-firebase/auth"

import database from '@react-native-firebase/database';

import { useDispatch, useSelector } from "react-redux";

export default function User({ navigation, route }) {

    const dispatch = useDispatch();
    // const state = useSelector((state) => state)
    const userData = useSelector((state) => state.list.userData)

    // const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

    const [alert, setAlert] = useState(false);
    const showAlert = () => {
        setAlert(true)
    };
    const hideAlert = () => {
        setAlert(false)
    };
    console.log("state: " + userData)
    console.log(userData)
    // console.log(state)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} >
            <View row justifyContent="space-between" margin={20}>
                <View>
                    <Text text40 margin-10>{userData.name}</Text>
                    <Text marginH-10>{userData.email}</Text>
                </View>
                <TouchableOpacity
                    row center style={{ alignItems: "baseline" }}
                    onPress={() => {
                        navigation.push("EditUser")
                    }}>
                    <Image source={editUserIcon} width={30} height={30}
                        tintColor={Colors.black} />
                </TouchableOpacity>

            </View>
            <View marginB-30 style={{ borderTopWidth: 0.5, padding: 20 }}>

                <TouchableOpacity row centerV marginV-15
                    onPress={async () => {
                        // navigation.navigate("Favourites", {items: (await getFavourites())
                        // after redx-ux
                        navigation.navigate("Favourites")
                    }
                    }>
                    <Image source={favouriteIcon} width={30} height={30}
                        tintColor={Colors.blue20} />
                    <Text style={{ fontWeight: "bold", fontSize: 20 }} marginL-15>Your Favourites</Text>
                </TouchableOpacity>

                <TouchableOpacity row centerV marginV-15
                    onPress={() => Alert.alert("Eklenecek")}>
                    <Image source={paymentIcon} width={30} height={30}
                        tintColor={Colors.blue20} />
                    <Text text60 marginL-15>Payment</Text>
                </TouchableOpacity>

                <TouchableOpacity row centerV marginV-15
                    onPress={() => {Alert.alert("Eklenecek")
                }
                        // navigation.navigate("LinkedAccounts")

                    }>
                    <Image source={linkedAccountsIcon} width={30} height={30}
                        tintColor={Colors.blue20} />
                    <Text text60 marginL-15>Linked Accounts</Text>
                </TouchableOpacity>

                <TouchableOpacity row centerV marginV-15
                    onPress={() => {Alert.alert("Eklenecek")}}>
                    <Image source={settingsIcon} width={30} height={30}
                        tintColor={Colors.blue20} />
                    <Text text60 marginL-15>Settings</Text>
                </TouchableOpacity>


                <TouchableOpacity row centerV marginV-15
                    // style={{borderTopWidth:0.5,paddingTop:20}}
                    onPress={() => {
                        showAlert();
                    }}>
                    <Image source={logOutIcon} width={30} height={30}
                        tintColor={Colors.red20} />
                    <Text text60 marginL-15 color={Colors.red20}>Log out</Text>
                </TouchableOpacity>

                <AwesomeAlert
                    show={alert}
                    showProgress={false}
                    title="Alert"
                    message="You are logging out!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, log out"
                    titleStyle={{ fontSize: 22, fontWeight: "bold" }}
                    messageStyle={{ fontSize: 16 }}
                    cancelButtonColor={Colors.red10}
                    confirmButtonColor={Colors.green10}
                    onCancelPressed={() => {
                        hideAlert();
                    }}
                    onConfirmPressed={() => {
                        hideAlert();
                        __SignOut();
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
    // }



// const mapStateToProps = (state) => {
// const players = _.map(state.playersList, (val, uid) => {
//     return { ...val, uid }; // this will create an object { name, phone, skill, id } and will create an array out of the objects
// });

// return {
//     players,
// };
// }


// export default connect(mapStateToProps, {  })(User);
