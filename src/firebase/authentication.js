import { Alert } from "react-native";
import firebase from "@react-native-firebase/app"
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

import auth from "@react-native-firebase/auth"
import { addUser } from "./firestore";
import { setPersonData } from "../redux/actions/favCardsAction";


export const __doSignUp = (userName, userMail, password, navigation) => {
    if (!userMail) {
        Alert.alert('Error', "Email required *")
        return false;
    } else if (password.length < 6) {
        Alert.alert('Error', "Weak password, minimum 6 chars")
        return false;
    } else {
        console.log("doCreateUser");
        return __doCreateUser(userName, userMail, password, navigation)
    }
}
export const __doCreateUser = async (userName, userMail, password, navigation) => {
    try {

        let response = await auth().createUserWithEmailAndPassword(userMail, password);
        if (response) {
            Alert.alert('Welcome Message', 'User account created & signed in!');
            addUser(userName, userMail)
            // navigation.pop();
            // navigation.navigate("Templates")
            // response.user.displayName = "bbebebe"
            // response.additionalUserInfo.username = "yyeyeni"

        }
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert("That email address is already in use!");
            // return false;
        }
        if (error.code === 'auth/invalid-email') {
            Alert.alert("That email address is invalid!");
            // return false;
        }
        else {
            console.log("else Error message: " + error);
            // return false;
        }
    }
}
export const __LogIn = async (userEmail, userPassword, navigation) => {

    try {
        if (userEmail.length != 0 & userPassword.length != 0) {

            let response = await auth().signInWithEmailAndPassword(userEmail, userPassword).then(
                response => {console.log("response")
                    console.log(response)
                    return response;
                    // setPersonData()
                
            }

            )
            //create new user object with its email

            // store logged in user
            
            Alert.alert("Successfully logged in", userEmail)
            // user logout yapıp login yaptığında eski userin bilgileri state de kalıyor
            // dispatch(fetchFavCards())
            // navigation.pop();
            // navigation.navigate("Templates")
        } else {
            Alert.alert("Some inputs are empty");
        }
        // return null;
        // if (response) {
        //     Alert.alert('Successful Login','Welcome the React Native')
        // }

    } catch (error) {
        if (error.code == "auth/invalid-email") {
            Alert.alert("WARNING", "The email address is badly formatted.")
        }
        else if (error.code == "auth/wrong-password") {
            Alert.alert("WARNING", "The password is invalid")
        } else {
            if (userEmail.length != 0 & userPassword.length != 0) {
                Alert.alert("WARNING", "The Problem Occured")
                console.log("error: " + error);
            } else {
                Alert.alert("Something went wrong")
            }
        }

    }
}
export const __SignOut = async () => {
    console.log("SignOut")
    auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

export const updateUser = async (oldEmailAdress, oldPassword, newEmailAdress, newUserName, navigation) => {


    if (newEmailAdress.length > 0 && newUserName.length > 0) {
        try {
            let response = await auth().signInWithEmailAndPassword(oldEmailAdress, oldPassword)
            try {
                response.user.updateEmail(newEmailAdress).then(() => {
                    //Update firestore
                    const currentUserID = firebase.auth().currentUser.uid;

                    const ref = database().ref('/users/' + currentUserID);
                    ref.update({
                        name:newUserName,
                        email: newEmailAdress
                    })
                    navigation.pop();

                }, error => {
                    console.log("ERROR: " + error.message)
                    Alert.alert("ERROR", error.message)
                })

            } catch (error) {
                Alert.alert("ERROR", error.message)
            }


        } catch (error) {
            Alert.alert("ERROR", error.message)
            console.log("ERROR: " + error)
        }
    }
    else {
        Alert.alert("Warning", "new user name and new email is null")
    }
    // Update Authentication

}