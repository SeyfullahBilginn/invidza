import React, { useEffect, useState, createRef } from 'react';
import {
    Dimensions, SafeAreaView, FlatList, Animated
} from 'react-native';
import { colors } from '../../shared/Colors';
import { View, Text, Image, TouchableOpacity, Card, Colors, Button } from "react-native-ui-lib";
import InvidzaLogo from "../../assets/invdzaLogo/download3.svg"

import BackOpacity from '../../shared/BackOpacity';
import MyActivityIndıcator from '../../shared/MyActivityIndicator';
import Favourite from '../../shared/Favourite';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

export default function Category({ navigation, route }) {
    const [category, setcategory] = useState([])
    const { items } = route.params;

    
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 60)

    const translateY = diffClamp.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60]
    })
    const getCategories = async () => {
        await setcategory(items)
    }
    console.log("Category")
    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {

            getCategories()
            // console.log(state)
        })
        // return unsubscribe;

    }, [navigation])
    const keyExtractor = item => item.key;
    function renderItem({ item, index }) {
        return (
            <Card
                key={item.key}
                style={{ marginHorizontal: 20, marginVertical: 10 }}
                onPress={() => {
                    navigation.push("InvitationCardDetail", { item: item })
                }}
            >

                <Card.Section
                    imageSource={item.coverImage}
                    center
                />
                <View padding-10 row bg-white
                    style={{ justifyContent: "space-between", alignContent: "space-between", borderBottomStartRadius: 20, borderBottomEndRadius: 20 }}>
                    <View style={{ justifyContent: "space-between" }}>
                        <Text text60 color={colors.darkViolet} >
                            {item.label}
                        </Text>
                        <Text text70 color={Colors.grey10}>
                            {item.title}
                        </Text>
                    </View>

                    <View style={{ justifyContent: "space-between" }}>
                        <Favourite item={item} primary={true} />

                        <Text>{item.unitPrice}</Text>
                    </View>
                </View>

            </Card>

        )
    }
    
    if (category.options) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>


                {/* HEADER */}

                <Animated.View style={{
                    flexDirection: "row", height: 60,
                    backgroundColor: colors.lightViolet, alignItems: "center",
                    transform: [
                        { translateY: translateY }
                    ],
                    position: "absolute", top: 0, left: 0, right: 0,
                    elevation: 4, zIndex: 100

                }}>
                    <BackOpacity navigation={navigation} />
                    <Text color="white" text50 marginL-20>{category.title}</Text>
                </Animated.View>

                <FlatList
                    ListHeaderComponent={
                        <View height={60}>

                        </View>
                    }
                    onScroll={(e) => {
                        scrollY.setValue(e.nativeEvent.contentOffset.y)
                    }}

                    data={category.options}
                    // data={items}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />

            </SafeAreaView>
        )
    } else {
        return (
            <View style={{flex:1}}>

                <MyActivityIndıcator />
            </View>
        )
    }
}