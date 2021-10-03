import React, {useEffect} from 'react';
import { Alert, SafeAreaView} from 'react-native';
import { View, Colors, TouchableOpacity, Image, Text } from "react-native-ui-lib"
import { TextInput } from 'react-native-paper';

// import {updateList} from "../../firebase/firestore"; 

import {contactsStore} from "../../stores/ContactsStore"
import { colors } from '../../shared/Colors';
import Button from "../../buttons/Button"
import {leftIcon} from "../../assets/constants"
import { getList } from '../../firebase/firestore';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import {createList, updateListName} from "../../redux/actions/favCardsAction"
const NewListDetails = ({route}) => {
const [listName, setlistName] = React.useState('');
const { data } = route.params;
const { refreshFunction } = route.params;

const navigation = useNavigation();
const dispatch = useDispatch();
const state = useSelector((state) => state)

const getLists = async (InvitersData) => {
    console.log("InviterData: " + InvitersData )
    // setinviters(InvitersData)
}

useEffect(() => {
    if(data) {
        setlistName(data);
    }
    // getList(docName,getLists);

}, [])


return (
    <SafeAreaView style={{flex:1}}>
        
        <View height={60} backgroundColor={colors.lightViolet} row centerV >
            
            <TouchableOpacity
            hitSlop={{right:12,left:12,bottom:12,top:12}}
            marginH-10
            activeOpacity={.5}
            onPress={() => {navigation.pop()}}>
                <Image source={leftIcon} height={16} width={16} tintColor={Colors.white} />
            </TouchableOpacity>
            <Text marginH-10 numberOfLines-1 color={Colors.white} style={{fontSize:20}}>
                {
                    (data) ?
                    (data)
                    :
                    ("Edit List")

                }
            </Text>
        </View>
        <View margin-10>
            {
                (!data) ? 
                (
                    <Text text70>{contactsStore.getLength()} people added to List</Text>
                )
                :
                (null)
            }
            <TextInput
            mode="outlined"
            label={(data) ? data : "Enter List Name"}
            placeholder="Type something"
            value={listName}
            onChangeText={listName => setlistName(listName) }
            />

            {
            (data) ? 
                (
                <Button 
                buttonText="Update List"
                onPress={() => {
                    if(listName.length > 0) {
                        dispatch(updateListName(data,listName))
                        navigation.navigate("ListDetails",{docName:listName})

                    }else{
                        Alert.alert("Name can not be null")
                    }
                } } 
                />
                )
                :
                (        
                <Button 
                    buttonText="Create List"
                    onPress={() => {
                        if(listName.length > 0) {

                            contactsStore.emptyPressedContacts();
                            // createList(contactsStore.getContacts(),listName);
                            dispatch(createList(listName,contactsStore.getContacts()))
                            navigation.navigate("ContactList")
                        }else{
                            Alert.alert("Name can not be null")
                        }
                    } } 
                />
                )
            }
            
        </View>
    </SafeAreaView>
);
};

export default NewListDetails;