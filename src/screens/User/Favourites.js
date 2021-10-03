import React,{useEffect,useState,createRef} from 'react';
import {
Dimensions,SafeAreaView, FlatList
} from 'react-native';
import { colors } from '../../shared/Colors';
import { View,Text,Image,TouchableOpacity,Card,Colors, Button } from "react-native-ui-lib";
import InvidzaLogo from "../../assets/invdzaLogo/download3.svg"

import BackOpacity from '../../shared/BackOpacity';

import Favourite from '../../shared/Favourite';
import {emptyFavIcon} from "../../assets/constants"

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

import {useDispatch, useSelector} from "react-redux";
import { connect } from 'react-redux';

export default function Favourites({navigation,route}) {
    
    
    const dispatch = useDispatch();
    const favs = useSelector((state) => state.list.favs)


    const keyExtractor = item => item.label;
    function renderItem({item,index}){
        return(
            <Card
            key={item.key}
            style={{marginHorizontal:20,marginVertical:10}}
            onPress={() => {
            navigation.navigate("InvitationCardDetail",{item: item})
        }}
            >
            <Card.Section
                imageSource={item.coverImage}
                center
                />
            <View padding-10 row bg-white 
            style={{justifyContent:"space-between",alignContent:"space-between",borderBottomStartRadius:20,borderBottomEndRadius:20}}>
                <View style={{justifyContent:"space-between"}}>
                    <Text text60 color={colors.darkViolet} >
                    {item.label}
                    </Text>
                    <Text text70 color={Colors.grey10}>
                    {item.title}
                    </Text>
                </View>
                <View style={{justifyContent:"space-between"}}>
                    <Favourite item={item} primary={true}/>
                    <Text>{item.unitPrice}</Text>
                </View>
            </View>
            </Card>
    )
}
    return(
        <SafeAreaView style={{flex:1 ,backgroundColor:colors.background}}>
            {/* <Image source={require("../../assets/invdzaLogo/download3.svg")} /> */}
            {/* <InvidzaLogo /> */}
            {/* HEADER */}
            <View height={60} backgroundColor={colors.lightViolet}
            row alignItems="center">
                <BackOpacity navigation={navigation} />
                <Text color="white" text50 marginL-10>Your Favourites</Text>
            </View>
            {/* <Text>-{favs.length}+</Text>
            <Button title="bas" onPress={() => {console.log("---"  + state.list.favs), console.log("+++ " + favs) }} /> */}
            <View style={{justifyContent:"center",flex:1}} >
                {
                    (favs.length>0) ?
                    <FlatList
                    data={favs}

                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    />
                    :
                    <View  
                    style={{justifyContent:"center",alignSelf:"center"}}>
                        <Image source={emptyFavIcon} width={ScreenWidth/2} height={ScreenWidth/2}  />
                        {/* <Text center style={{backgroundColor:"red"}}>don't have favorites</Text> */}
                    </View>
                }
                
            </View>
        </SafeAreaView>
    )

}


