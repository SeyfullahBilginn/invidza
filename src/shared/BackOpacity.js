import { View,Text,TextInput,StyleSheet,Alert
    ,SafeAreaView,StatusBar } from "react-native";
import React,{useState,useEffect,useContext ,Component} from "react";

import {Image, TouchableOpacity, Colors} from "react-native-ui-lib"
import {leftIcon} from "../assets/constants"


function BackOpacity({navigation}) {
    return(
        <TouchableOpacity
        hitSlop={{right:16,left:16,bottom:16,top:16}}
        margin-10
        onPress={() => navigation.pop()}
        >
            <Image source={leftIcon} height={16} width={16} tintColor={Colors.white} />
        </TouchableOpacity>
    )
}

export default BackOpacity;