import React, { useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Isao } from 'react-native-textinput-effects';
import { Colors, Text, View } from 'react-native-ui-lib'; //eslint-disable-line
import { useDispatch, useSelector } from "react-redux";
import Button from "../../buttons/Button";
import { updateUserData } from "../../redux/actions/favCardsAction";
import BackOpacity from '../../shared/BackOpacity';
import { colors } from '../../shared/Colors';

export default function User({ navigation, route }) {
    // const params = route.params.currentUser;


    const dispatch = useDispatch();
    const userData = useSelector((state) => state.list.userData)

    const [userName, setUserName] = useState("")
    const [emailAddress, setEmailAdress] = useState("")
    const [password, setPassword] = useState("")

    const [alert, setAlert] = useState(false);


    const showAlert = () => {
        setAlert(true)
    };

    const hideAlert = () => {
        setAlert(false)
    };
    console.log("eeee")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ flex: 1 }}>

                <View style={{
                    height: 60, backgroundColor: colors.lightViolet,
                    flexDirection: "row", alignItems: "center"
                }}>
                    <BackOpacity navigation={navigation} />

                    <Text text40 margin-10 white>Edit User</Text>
                </View>

                <View margin-10>
                    <Isao
                        label={'New User Name'}
                        // this is applied as active border and label color
                        activeColor="#b5179e"
                        // active border height
                        placeholder={userData.name}

                        borderHeight={7}
                        inputPadding={16}
                        labelHeight={24}
                        style={{ backgroundColor: Colors.grey70, marginVertical: 10 }}
                        inputStyle={{ color: Colors.black }}
                        // this is applied as passive border and label color
                        // value={userName}
                        onChangeText={userName => setUserName(userName)}
                        passiveColor={colors.lightViolet}
                    />

                    <Isao
                        label={'New Email'}
                        onChangeText={emailAddress => setEmailAdress(emailAddress)}
                        keyboardType="email-address"
                        // this is applied as active border and label color
                        // activeColor={'#da7071'}
                        activeColor="#b5179e"
                        placeholder={userData.email}
                        // active border height
                        borderHeight={6}
                        inputPadding={16}
                        labelHeight={24}
                        style={{ backgroundColor: Colors.grey70, marginVertical: 10 }}
                        inputStyle={{ color: Colors.black }}
                        // this is applied as passive border and label color
                        passiveColor={colors.lightViolet}
                    // passiveColor={'#da7071'}
                    />
                    <Isao
                        label={'Your Password'}
                        onChangeText={password => setPassword(password)}
                        keyboardType="visible-password"
                        // this is applied as active border and label color
                        // activeColor={'#da7071'}
                        activeColor="#b5179e"
                        placeholder="******"
                        // active border height
                        borderHeight={6}
                        inputPadding={16}
                        labelHeight={24}
                        style={{ backgroundColor: Colors.grey70, marginVertical: 10 }}
                        inputStyle={{ color: Colors.black }}
                        // this is applied as passive border and label color
                        passiveColor={colors.lightViolet}
                    // passiveColor={'#da7071'}
                    />

                    <View style={{ alignItems: "flex-end" }}>
                        <Button primary={false} buttonText="Save Changes" onPress={() => {
                            showAlert();
                        }
                        } />
                    </View>

                    <AwesomeAlert
                        show={alert}
                        showProgress={false}
                        title="Alert"
                        message="You are updating your informations!"
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={true}
                        showConfirmButton={true}
                        cancelText="No, cancel"
                        confirmText="Yes, update it"
                        titleStyle={{ fontSize: 22, fontWeight: "bold" }}
                        messageStyle={{ fontSize: 16 }}
                        
                        cancelButtonColor={Colors.red10}
                        confirmButtonColor={Colors.green10}
                        onCancelPressed={() => {
                            hideAlert();
                        }}
                        onConfirmPressed={() => {
                            hideAlert();
                            if (password) {
                                dispatch(updateUserData(userData.email,
                                    password, emailAddress, userName, navigation))
                            } else {
                                Alert.alert("Warning", "Password is null")
                            }
                        }}
                    />
                </View>
            </View> 
            {
                (userData.loading) ? (
                    <View style={{
                        marginVertical: 20,
                        elevation: 6, position: "relative", bottom: 0,
                        alignSelf: "center",
                        // justifyContent: "center", alignItems: "center", alignContent: "center",
                        borderRadius: 35, backgroundColor: "grey"
                    }}>
                        <View marginH-12 marginV-6 row center >
                            <ActivityIndicator size="large"
                                style={{ marginHorizontal: 6, justifyContent: "center" }} color="white" />
                            <Text style={{
                                marginHorizontal: 6,
                                fontSize: 20,
                                fontWeight: "bold", color: "white"
                            }}>LOADING</Text>

                        </View>
                    </View>
                ) : (null)
            }
        </SafeAreaView>
    )

    // }

}
