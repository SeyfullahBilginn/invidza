import React,{useState, useEffect} from "react";
import { colors } from "./Colors";

import { View,Text,Image,TouchableOpacity,Colors, Card} from "react-native-ui-lib";

import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
// import { addToFav, removeFromFav } from "../firebase/firestore";

import {addToFavs, removeFromFavs } from "../redux/actions/favCardsAction";
import {useDispatch, useSelector} from "react-redux";
import { connect } from 'react-redux';


const favouriteIcon = require("../assets/icons/like.png")
const favouriteFilled = require("../assets/icons/favourite-filled-512.png")

export default function Favourite({item,primary}) {
    const [Fav, setFav] = useState()

    const dispatch = useDispatch();
    const favs = useSelector((state) => state.list.favs)

    const getInfo =  () => {
        if(favs) {
            
            // check whether state.list.favs includes item 
            var isFilled = favs.some(function(e) {
                return e.label === item.label;
            });

            setFav(isFilled)


        }
    }
    useEffect( () => {
        
        getInfo()
},[Fav])
    function changeFavCard() {
        if(Fav) {
            
            dispatch(removeFromFavs(item))
            setFav(false)
        }
        else{      
            dispatch(addToFavs(item))
            setFav(true)
        }
    } 

    return(
            <TouchableOpacity
            
            hitSlop={{bottom:10,left:10,right:10,top:10}}
            onPress={changeFavCard}>
                {
                    (Fav==true) ? 
                    <Image source={favouriteFilled} 
                    width={24} height={24} tintColor={(primary) ? colors.darkViolet : Colors.white}/>
                    :
                    <Image source={favouriteIcon} 
                    width={24} height={24} tintColor={(primary) ? colors.darkViolet : Colors.white}/>
                    
                }
            </TouchableOpacity>
    )
}
