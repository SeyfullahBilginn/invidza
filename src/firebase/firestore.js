import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { View,Text } from 'react-native';
import React,{Component} from "react";
import {contactsStore} from "../stores/ContactsStore"; 
import { ComponentsColors } from 'react-native-ui-lib';
import { Alert } from 'react-native';
import auth from "@react-native-firebase/auth"
import database from '@react-native-firebase/database';


// add User to firestore, used for login and signUp
export const addUser = async (userName,userEmail) =>  {
    console.log("add User")
    const currentUserID = firebase.auth().currentUser.uid;

    // firestore()
    // .collection('users').doc(currentUserID)
    // .set({
    // name: userName,
    // email: userEmail,
    // language: null,
    // // uid: currentUserID
    // })
    // .then(() => {
    // console.log('User added!');
    // });

    // REAL TIME DATABASE
    const ref = database().ref("/users").child(currentUserID);


    ref.set({
        name:userName,
        email: userEmail
    }).then(
        () => { 
            //REDUX
        }
    )
}


// create inviter List to current user lists collection
export const createList = async (inviters,listName) => {
    console.log("createList")
    const currentUserID = firebase.auth().currentUser.uid;
    // get current user uid to store list to that user firestore area
    
    // sort contacts before store it to firestore
    // contactsStore.sortContacts()

        //doc id = listName
        // docun içi telephone number
    // var contacts = []
    // inviters.map(person => {
    //     contacts.push(

    //             {
    //             givenName: person.givenName,
    //             familyName: person.familyName,
    //             phoneNumber: person.phoneNumber.toString()
    //             }
    //     )
    
    // })
    // firestore().collection("users").doc(currentUserID)
    // .collection("lists").doc(listName).set({name:listName,contacts:contacts})


    //empty the list for the next new lists
    // contactsStore.emptyList();

    // REAL TIME DATABASE 
    
    const ref = database().ref("/users/" + currentUserID + "/lists/" + listName).set({
        name: listName,
        contacts: inviters
    }).then(
        //REDUX 
    )




}

export const updateList = async (listName,newListName) => {
    
    const currentUserID = firebase.auth().currentUser.uid;
    // const firestore = firebase.firestore();
    // get current user uid to store list to that user firestore area

    // create new docyment
    // assign new list name
    // delete old document
    // firestore.collection("users").doc(currentUserID).collection("lists").doc(listName)
    // .get().then(function (doc) {
    //     if (doc && doc.exists) {
    //         var data = doc.data();
    //         data.name = newListName;
    //         // saves the data to 'name'
    //         firestore.collection("users").doc(currentUserID).collection("lists").doc(newListName)
    //         .set(data)
    //             // deletes the old document
    //             // firestore()
                
    //             firestore.collection("users").doc(currentUserID).
    //             collection("lists").doc(listName).delete();

    //     }
    // });
    
    // REAL TIME DATABASE

    const ref = database().ref("/users/" + currentUserID + "/lists");

    ref.child(listName).once("value").then(
        function(snap) {
            var data = snap.val();
            data.name = newListName;
            console.log(data)
            ref.child(newListName).set(
                {
                    name: newListName,
                    contacts: data.contacts
                }
            )
            ref.child(listName).remove();
        }
    )
    


}


export const getAllInvitersLists = async () => {
    const currentUserID = firebase.auth().currentUser.uid;
    
    // const snapshot = firestore().collection('users')
    // .doc(currentUserID).collection("lists").get();
    
    var contacts = [];

    //!!!!
    // await snapshot.then(asd =>  {
        
    //     asd.docs.map(zxc => {
    //         var name = "";
    //         var list = [];
    //         var count = 0;
            
    //         // zxc.data().contacts
    //         // list.push(zxc.data().contacts[count])
    //         zxc.data().contacts.map(cv => {
    //             // count++;
    //             list.push(cv)
    //         })
    //         name = zxc.data().name;
    //         contacts.push({name:name,contacts:list})
    //     })
    // })
    
    const ref = database().ref("/users/" + currentUserID + "/lists/")
    await ref.once("value").then(
        snapshot => {
            snapshot.forEach( child => {
                // console.log("child: " + child.val().name )
                contacts.push(
                        {
                            name: child.val().name,
                            contacts: child.val().contacts
                        }
                    )
            
            })
        }
    ).then(
        //REDUX
    )
    
    return contacts;
}

// used in ListDetails, gets contacts of that list 
// export const getSpecificInvitersLists = async (docName) => {
//     const currentUserID = firebase.auth().currentUser.uid;
    
//     var contacts = [];
//     await firestore().collection('users')
//     .doc(currentUserID).collection("lists").doc(docName).get().then(
//         querySnapshot => {
//             if(querySnapshot.exists) {
//                 querySnapshot.get("contacts").forEach(
//                     contact => {
//                         contacts.push(contact);
//                     }
//                 )
//             }
//         }
//     )

        
//     var list = {name:docName,contacts:contacts};
//     return list;
// }

export const getList = async (docName,getLists) => {
    const currentUserID = firebase.auth().currentUser.uid;
    var contacts = [];
    // await firestore().collection('users')
    // .doc(currentUserID).collection("lists").doc(docName).get().then(
    //     querySnapshot => {
    //         if(querySnapshot.exists) {
    //             querySnapshot.get("contacts").forEach(
    //                 contact => {
    //                     contacts.push(contact);
    //                 }
    //             )
    //         }
    //     }
    // )

    const ref = database().ref("/users/" + currentUserID + "/lists/" + docName)
    await ref.once("value").then(
        snapshot => {
            // console.log("snap: " + snapshot.val().name)
            getLists({name:docName, contacts: snapshot.val().contacts})
            
        }
    ).then(
        //REDUX
    )


    // var list = {name:docName,contacts:contacts};
    // getLists(list)

}

// NOT USED ANYMORE

export const getLastItem = async (docName) => {
    const currentUserID = firebase.auth().currentUser.uid;
    var lastItem;
    await firestore().collection('users')
    .doc(currentUserID).collection("lists").doc(docName).get().then(
        querySnapshot => {
            if(querySnapshot.exists) {
                const contacts = querySnapshot.get("contacts"); 
                
                lastItem = contacts[contacts.length-1]
            }
        }
    )
    return lastItem;
}

// child removed
export const deleteContact = (docName,deletedContact) => {
    // console.log("docNAME: " + docName)
    const currentUserID = firebase.auth().currentUser.uid;
// console.log("deleteContact: "+ deletedContact.phoneNumber)
//     firestore().collection("users").doc(currentUserID).
//     collection("lists").doc(docName).update({
//         "contacts": firestore.FieldValue.arrayRemove({
//             "familyName": deletedContact.familyName,
//             "givenName": deletedContact.givenName,
//             "phoneNumber": deletedContact.phoneNumber 
//                 })
//     });
    
    var data =[]; 
    const ref = database().ref("/users/" + currentUserID + "/lists/" + docName)
    ref.once("value").then(
        snapshot => {
            data = snapshot.val().contacts;
            // data.map(item => {
            //     console.log(item)
            // })
            data = data.filter( item => 
                item.phoneNumber !== deletedContact.phoneNumber
                // console.log(item) 
                // console.log(deletedContact)
            );
            // console.log("snapshot: " + snapshot.val().contacts)
            // console.log("data: " + data)
            ref.update({
                name: docName,
                contacts: data
            })
        }

    )
}  

export const deleteList = async (del) => {
    const currentUserID = firebase.auth().currentUser.uid;

    // firestore().collection("users").
    // doc(currentUserID).collection("lists").doc(del).delete();

    database().ref("/users/" + currentUserID + "/lists/" + del).remove();
    
}


//  TEMPLATES


export const addToFav = async(card) => {
    // console.log("ADD TO FAV: " + card.coverImage.toString())
    const currentUserID = firebase.auth().currentUser.uid;
    // const docRef = await firestore().collection('users').
    // doc(currentUserID).collection("Favs").doc(card.title);
    
    // const doc = await docRef.get();
    // // check doc exists
    // if (!doc.exists) {
    //     console.log('No such document exist!');
    //     docRef.set({
    //     card: firestore.FieldValue.arrayUnion(card)
    // })
    // }
    // else {
    //     docRef.update({
    //         card: firestore.FieldValue.arrayUnion(card)
    //     })
    // }
    // console.log("card: " + card)
    // console.log(card)
    // database().ref("/users/" + currentUserID + "/favs/" + card.title);
    var postListRef = database().ref("/users/" + currentUserID + "/favs/" + card.title);
    var newPostRef = postListRef.push();

    newPostRef.set(card)


}

export const removeFromFav = async (item) => {
    const currentUserID = firebase.auth().currentUser.uid;
    const docRef = await firestore().collection('users').
    doc(currentUserID).collection("Favs").doc(item.title);
    
    const doc = await docRef.get();
    
    if(doc.exists) {
        docRef.update({
            card: firestore.FieldValue.arrayRemove(item)
        })
    }

}

export const getFavourites = async () => {
    const currentUserID = firebase.auth().currentUser.uid;
    const docRef = await firestore().collection('users').
    doc(currentUserID).collection("Favs");
    
    const favourites = [];

    const events = await docRef.get()
    .then(querySnapshot => {
      querySnapshot.docs.map(doc => {
        // console.log('LOG 1', doc.data());
        // console.log("lll: " + doc.data().card)
        doc.data().card.map(card => {
            favourites.push(card)
        })

      });
    });
    // console.log('LOG 2', favourites);
    // favourites.map(asd => {
    //     console.log("asd: " + asd)
    // })
    return favourites;
}
////////////////////////////////////////
// LinkedAccounts not using
// export const getLinkedAccounts = async () => {
//     const currentUserID = firebase.auth().currentUser.uid;
//     const docRef = await firestore().collection('users').
//     doc(currentUserID).collection("LinkedAccounts");
//     // console.log("docRef: " + docRef)
//     const doc = await docRef.get();
//     const accounts = [];
//     console.log("doc: " + doc.docs.length)
//     if(doc.docs.length > 0) {
//         console.log("var")
//         return "var"
//     }else {
//         console.log("yok")
//         return "yok"
//     }
// }
// not using
// export const addToLinkedAccounts = async (accountEmail,password) => {
//     const currentUserID = firebase.auth().currentUser.uid;
//     console.log(currentUserID)
//     const docRef = await firestore().collection('users').
//     doc(currentUserID).collection("LinkedAccounts").doc(accountEmail);
    
//     const doc = await docRef.get();
    
//     // check doc exists
//     if (!doc.exists) {

//         // check account whether infos are correct or not
//         try {
//             if(accountEmail.length != 0 & password.length != 0) {
                
//                 let response = await auth().signInWithEmailAndPassword(accountEmail, password)
//                 //create new user object with its email
//                 console.log("response: " + response)
//                 docRef.set({email:accountEmail})

//         }else{
//             Alert.alert("Some inputs are empty");
//         }
//         // if (response) {
//         //     Alert.alert('Successful Login','Welcome the React Native')
//         // }
        
//         } catch (error) {
//         if(error.code == "auth/invalid-email") {
//             Alert.alert("WARNING","The email address is badly formatted.")
//         }
//         else if(error.code == "auth/wrong-password"){
//             Alert.alert("WARNING","The password is invalid")
//         }else{
//             if(accountEmail.length != 0 & password.length != 0) {
//             Alert.alert("WARNING","The Problem Occured")
//             console.log("error: " + error);
//             }else{
//                 Alert.alert("Something went wrong")
//             }
//         }
        
//     }
//     }
//     else {
//         console.log("ELSE")
//         Alert.alert("Warning","It is already in linked accounts")
//         // docRef.update({
//         //     card: firestore.FieldValue.arrayUnion(card)
//         // })
//     }
// }