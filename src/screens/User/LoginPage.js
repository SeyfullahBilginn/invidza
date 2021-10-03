import { View,TextInput,StyleSheet,Alert
    ,SafeAreaView,StatusBar } from "react-native";
import React,{useState,useEffect,useContext ,Component} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from "../../shared/Colors"
import Button from "../../buttons/Button";
import {__LogIn} from "../../firebase/authentication";
import {Image, TouchableOpacity, Colors, Text} from "react-native-ui-lib"
import BackOpacity from "../../shared/BackOpacity";
// import { setPersonData } from "../redux/actions/favCardsAction";

import { useDispatch, useSelector } from "react-redux";
import { setPersonData } from "../../redux/actions/favCardsAction"


export default function LoginPage({navigation,canGoBack}) {  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     UserEmail: "",
  //     UserPassword: ""
  //   }
  // }
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const dispatch = useDispatch();
  const state = useSelector((state) => state)



    return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle="default" backgroundColor={colors.darkViolet}/>
      <View style={{height:60,backgroundColor:colors.lightViolet,
        flexDirection:"row",alignItems:"center"}}>
        {
          navigation.canGoBack()?
          <BackOpacity navigation={navigation}/>
          :
          (null)
        }

        <Text text40 margin-10 white>LogIn</Text>
      </View>


      <View style={{zIndex:1,width:"80%",marginTop:75,
      borderRadius:20,alignSelf:"center",alignItems:"center",
      backgroundColor:"white",elevation:12}}>
          <View style={{zIndex:2,justifyContent:"center"}}>
              <Image style={{height:110,width:110,position:"relative",top:-55,borderRadius:55}} source={{uri:"https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-450x450.png"}}/>
          </View>
          <View style={{zIndex:2}}>
              <View style={styles.inputContainer}>
              <TextInput
            textContentType="emailAddress"
            style={styles.textInput}
            onChangeText={UserEmail => setUserEmail(UserEmail) }
            placeholder= "Email Address"
            value={userEmail}
          />
                  <Icon name="email" style={{alignSelf:"center",position:"relative",right:-10}} size={22} />
              </View>
              <View style={styles.inputContainer}>
              <TextInput
            secureTextEntry={true}
            textContentType="password"
            style={styles.textInput}
            onChangeText={UserPassword => setUserPassword(UserPassword) }
            placeholder= "Password"
            value={userPassword}
            />
                  <Icon name="lock" style={{alignSelf:"center",position:"relative",right:-10}} size={22} />
              </View>

              <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
                  <Button
                    onPress={() => 
                      {
                        __LogIn(userEmail,userPassword,navigation)
                        
                      } 
                      }
                    primary={true}
                    buttonText="LogIn"
                  />
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                  <Text style={{fontSize:16,width:"50%",alignSelf:"center",textAlign:"center"}}>Don't Have an Account?</Text>
                  <Button buttonContainer={{width:85,backgroundColor:"rgb(150,150,250)"}} 
                      buttonTextStyle={{fontSize:16}}
                      buttonText="SignUp"
                      primary={false}
                      onPress={() => {
                        navigation.navigate("Signup");
                        
                      }}
                      />
              </View>
          </View>
      </View>
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  textInput: {
    backgroundColor:"white",
    padding:10,
    margin:15,
    borderRadius:20,
    borderColor:"red",
    borderWidth:1,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:100
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
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
      padding:10,
      width:"85%"
  },
})