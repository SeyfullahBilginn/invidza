
import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { Colors, View, Card, CardProps, Button, Text, Image } from 'react-native-ui-lib';

import Contacts from 'react-native-contacts';
import { colors } from '../../shared/Colors';
import { trashIcon } from "../../assets/constants";
import { useNavigation } from '@react-navigation/native';
import MyActivityIndıcator from '../../shared/MyActivityIndicator';


function InviterList({ inviters, del }) {

    const navigation = useNavigation();
    if (!inviters.contacts) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <MyActivityIndıcator />
            </View>
        )
    } else {
        return (
            <Card
                row
                style={{
                    elevation: 2, shadowColor: Colors.grey10, padding: 15,
                    justifyContent: "space-between", alignItems: "center", marginVertical: 5,
                    marginHorizontal: 15, borderRadius: 2
                }}
                onPress={() => 
                    {
                        console.log("onPress: " + inviters.name)
                        navigation.navigate("ListDetails", { docName: inviters.name })

                    }
                }
            >
                <View style={{
                    alignItems: "flex-start", flex: 1,
                }}>
                    <Text text60 color={Colors.grey10} numberOfLines={1} >
                        {inviters.name}
                    </Text>
                    <Text text70 color={Colors.grey30}>
                        {inviters.contacts.length} People
                    </Text>
                </View>
                <TouchableOpacity style={{ margin: 5 }}
                    onPress={() => del(inviters.name)
                    }
                >
                    <Image
                        source={trashIcon}
                        style={{ height: 25, width: 25, tintColor: Colors.grey30 }}
                    />
                </TouchableOpacity>
            </Card>
        )
    }

};


export default InviterList;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
