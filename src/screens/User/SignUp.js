import { View,TextInput,StyleSheet,Alert,
    SafeAreaView,ScrollView,Dimensions,Image,
    TouchableOpacity,StatusBar } from "react-native";
import React,{useState,useEffect, Component} from "react";
import {Text} from "react-native-ui-lib"
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from "../../buttons/Button";
import {__doSignUp} from "../../firebase/authentication";
// import {doSignUp} from "../../firebase/authentication";

import {colors} from "../../shared/Colors"
import BackOpacity from "../../shared/BackOpacity";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
// @inject("UserStore")
// @observer
// Kullanıcı verileri Mobx de mi tutulur asyncStorage da mı
export default class SignUpPage extends Component {  
    constructor(props) {
    super(props);
    this.state = {
        userName: "",
        userEmail: "",
        password: ""
    }
    }

    render() {
    



    return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="default" backgroundColor={colors.darkViolet}/>
        {/* HEADER */}
        <View style={{height:60,backgroundColor:colors.lightViolet,
        flexDirection:"row",alignItems:"center"}}>
            <BackOpacity navigation={this.props.navigation}/>
            
            <Text text40 margin-10 white>SignUp</Text>
        </View>
        
        <View style={{zIndex:1,height:"75%",width:"80%",marginTop:75,
        borderRadius:20,alignSelf:"center",alignItems:"center",
        backgroundColor:"white",elevation:12}}>
            <View style={{zIndex:2,justifyContent:"center"}}>
                <Image style={{height:110,width:110,position:"relative",top:-55,borderRadius:55}} source={{uri:"https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-450x450.png"}}/>
            </View>
            <View style={{zIndex:2}}>
                <View style={styles.inputContainer}>
                    <TextInput
                        textContentType="username"
                        style={styles.textInput}
                        onChangeText={userName => this.setState({userName}) }
                        placeholder= "Name"
                        value={this.state.userName}
                    />
                    <Icon name="person" style={{alignSelf:"center",position:"relative",right:-10}} size={22} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        textContentType="emailAddress"
                        style={styles.textInput}
                        onChangeText={userEmail => this.setState({userEmail}) }
                        placeholder= "Email Address"
                        value={this.state.userEmail}
                    />
                    <Icon name="email" style={{alignSelf:"center",position:"relative",right:-10}} size={22} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        textContentType="password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={password => this.setState({password}) }
                        placeholder= "Password"
                        value={this.state.password}
                    />
                    <Icon name="lock" style={{alignSelf:"center",position:"relative",right:-10}} size={22} />
                </View>

                <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
                    <Button 
                        onPress={() => 
                        __doSignUp(this.state.userName,this.state.userEmail,
                            this.state.password,this.props.navigation)}
                        buttonText="SignUp"
                        primary={true}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <Text style={{fontSize:16,width:"50%",alignSelf:"center",textAlign:"center"}}>Already Have an Account?</Text>
                    <Button buttonContainer={{width:70,backgroundColor:"rgb(150,150,250)"}} 
                        buttonTextStyle={{fontSize:16}}
                        buttonText="LogIn"
                        primary={false}
                        onPress={() => this.props.navigation.navigate("Login")}
                        />
                </View>
            </View>
        </View>

    </SafeAreaView>
    );}
    }
    
    const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        // backgroundColor: "#009688",
        backgroundColor:"rgb(90,90,250)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:150
    },
    buttonText: {
        fontSize: 22,
        color: "rgb(220,220,220)",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    inputContainer:{
        flexDirection:"row",
        backgroundColor:"rgb(200,200,200)",
        margin:10,
        borderRadius:10
        
    },
    textInput: {
        // backgroundColor:"green",
        padding:10,
        width:"85%"
    },
    appButtonContainer: {
        elevation: 8,
        // backgroundColor: "#009688",
        backgroundColor:"rgb(90,90,250)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:100
    },
    appButtonText: {
        fontSize: 18,
        color: "rgb(220,220,220)",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        },
    center: {
        width: '100%',
        height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    behind: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    }
}
    
    )