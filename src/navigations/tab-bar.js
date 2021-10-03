import { View,Image, TouchableOpacity,TouchableWithoutFeedback, Platform,
    Text, Keyboard, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import React,{useEffect,useState} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {Colors} from 'react-native-ui-lib';
import {colors} from "../shared/Colors";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function TabBar({state, descriptors, navigation}) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const icons = [
        require("../assets/icons/notebook-of-contacts-512.png"),
        require("../assets/icons/dashboard-512.png"),
        require("../assets/icons/profile-user-512.png")
    ]


if (focusedOptions.tabBarVisible === false) {

    return null;
}
return (
    <View style={{ flexDirection: 'row',maxHeight:deviceHeight/12}}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            options.keyboardHidesTabBar = true;
            const label =
            options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            
        const isFocused = state.index === index;
        
        const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });


        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);

        }
        };
        
        const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
        };
        return (
                <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                key={icons[index]}
                // Violet30 => (191,147,235)
                //rgb(66,24,181)
                style={[styles.tabBar,{backgroundColor:isFocused ? colors.darkViolet : colors.lightViolet
                ,
                // 1/12 - 1/13 = 1/156
                // borderTopEndRadius: isFocused ? deviceHeight/156 : 4,
                // borderTopStartRadius:isFocused ? deviceHeight/156 : 4
                }]}>
                <Image source={icons[index]} style={[styles.tabBarIcon,
                    {tintColor:isFocused ? 'white' : colors.grey,width:24,height:24}]}/>
                <Text style={{color: isFocused ? 'white' : colors.grey}}>{label}</Text>
            </TouchableOpacity>
        );
    })}
    </View>
);
}

export default TabBar;


const styles = StyleSheet.create({
    tabBar:{
        flex:1,
        height:deviceHeight/12,
        justifyContent:"center",
        alignItems:"center",
    },
    tabBarIcon:{
        alignSelf: "center",
    }
})