import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import auth from "@react-native-firebase/auth"
import { Alert } from 'react-native';

const addToFavs = (payload) => {
    return (dispatch) => {
        const currentUserID = firebase.auth().currentUser.uid;
        var postListRef = database().ref("/users/" + currentUserID + "/favs/" + payload.title);
        var newPostRef = postListRef.push();

        newPostRef.set(payload)
            .then(
                dispatch({
                    type: "ADD_TO_FAVS",
                    payload: payload
                })
            )
    }
}
const removeFromFavs = (payload) => {
    return (dispatch) => {
        const currentUserID = firebase.auth().currentUser.uid;
        const docRef = database().ref("/users/" + currentUserID + "/favs/" + payload.title);
        // const doc = docRef.get();
        // docRef.
        // console.log(payload.key)

        docRef.once('value', function (snapshot) {
            snapshot.forEach(function (child) {
                // var societies = childs.child('Societies').val();
                console.log(child.val().label);
                if (child.val().label === payload.label) {
                    console.log("if")
                    docRef.child(child.key).remove(() => {
                        console.log("item removed: " + child.val().label)
                    })
                }
            });
        }).then(
            dispatch({
                type: "REMOVE_FROM_FAVS",
                payload: payload
            })
        )
    }
}

const fetchFavCards = () => {
    return (dispatch) => {
        if (firebase.auth().currentUser) {
            const currentUserID = firebase.auth().currentUser.uid;
            const favourites = [];
            const reference = database().ref('/users/' + currentUserID).child("favs");
            // on olduğunda then( addToFavs ve removeFromFavs ta redux ın stateiden çıkarmaya gerek kalmıyor)
            // ???
            reference.once('value', (snapshot) => {
                var favs = []
                snapshot.forEach(item => {
                    item.forEach(card => {
                        favs.push(card.val())
                    })
                })
                dispatch({ type: "FETCH_FAV_CARDS_SUCCESS", payload: favs });
                // this function is persistent throughout the app. meaning whenever there is data
                // get that value from the firebase. that value is from the snapsot.
            });
        }
    }
}



const fetchInviterLists = () => {
    return (dispatch) => {
        // console.log("---")
        if (firebase.auth().currentUser) {
            const currentUserID = firebase.auth().currentUser.uid;
            const InviterLists = [];
            const reference = database().ref('/users/' + currentUserID).child("lists");
            // on olduğunda then( addToFavs ve removeFromFavs ta redux ın stateiden çıkarmaya gerek kalmıyor)
            // ???
            
            dispatch({
                type: "FETCH_INVITERS_LIST_REQUEST",
                
            })
            // console.log("++++++++++: " + reference)
            reference.once('value', (snapshot) => {
                // console.log("----: " + reference)
                snapshot.forEach(item => {
                    var list = [];
                    // console.log(item.val())
                    if (item.val().contacts) {
                        item.val().contacts.map(con => {
                            // console.log("con: "+ con.givenName);
                            list.push(con)
                        })

                    }
                    // console.log(item.val().name)

                    // console.log(item.val().contacts)

                    InviterLists.push({ name: item.val().name, contacts: list })
                })

                // this function is persistent throughout the app. meaning whenever there is data
                // get that value from the firebase. that value is from the snapsot.
            }).then(
                res => {
                    // console.log(res)
                    // console.log("****")
                    // console.log(InviterLists)
                    dispatch({
                        type: "FETCH_INVITERS_LIST_SUCCESS",
                        payload: InviterLists
                    });

                }

            ).catch(err =>
                dispatch({
                    type: "FETCH_INVITERS_LIST_FAILURE",
                    error: err
                })
            );
        }
    }
}

const fetchFavCardsSuccess = (favCards) => {
    return {
        type: "FETCH_FAV_CARDS_SUCCESS",
        payload: favCards
    }
}



const createList = (listName, contacts) => {
    return (dispatch) => {
        const currentUserID = firebase.auth().currentUser.uid;

        const ref = database().ref("/users/" + currentUserID + "/lists/" + listName).set({
            name: listName,
            contacts: contacts
        }).then(
            dispatch({
                type: "CREATE_LIST",
                listName: listName,
                contacts: contacts
            })
            //REDUX 
        )
    }
}

const deleteList = (listName) => {
    return (dispatch) => {
        const currentUserID = firebase.auth().currentUser.uid;
        console.log("deleteList")
        database().ref("/users/" + currentUserID + "/lists/" + listName).remove().then(
            (res) => {
                console.log("res")
                console.log(res);
                dispatch({
                    type: "DELETE_LIST",
                    listName: listName
                })
            }
        );

    }
}

const deleteContact = (listName, deletedContact) => {
    return (dispatch) => {
        const currentUserID = firebase.auth().currentUser.uid;
        // const ref2 = database().ref("/users/" + currentUserID + "/lists/" + listName + "/contacts").child("1").remove();
        var playersRef = firebase.database().ref("players/");
        const ref = database().ref("/users/" + currentUserID + "/lists/" + listName + "/contacts")
        console.log("111")
        ref.once("value").then(query => {
            var arr = [];
            console.log(query.val());
            // // console.log(deletedContact.givenName)
            query.val().forEach(item => {
                if (item.phoneNumber !== deletedContact.phoneNumber) {
                    console.log("-")
                    arr.push(item);
                } else {

                    console.log("???")
                }
                // console.log(item)
            })
            database().ref("/users/" + currentUserID + "/lists/" + listName).update({ name: listName, contacts: arr })
        })

        dispatch({
            type: "DELETE_CONTACT",
            listName: listName,
            deletedContact: deletedContact
        })
    }
}

const updateListName = (oldListName, newListName) => {
    return (dispatch) => {
        const currentUserID = firebase.auth().currentUser.uid;

        const ref = database().ref("/users/" + currentUserID + "/lists");
        ref.child(oldListName).once("value").then(
            function (snap) {
                var data = snap.val();
                data.name = newListName;
                console.log(data)
                ref.child(newListName).set(
                    {
                        name: newListName,
                        contacts: data.contacts
                    }
                )
                ref.child(oldListName).remove();
            }
        ).then(
            dispatch(
                {
                    type: "UPDATE_LIST_NAME",
                    oldListName: oldListName,
                    newListName: newListName
                }

            ),
        )
    }
}

const setAllContacts = (contacts) => {
    return (dispatch) => {
        console.log("setAllContacts")
        dispatch(
            {
                type: "SET_ALL_CONTACTS",
                contacts: contacts
            }
        ) 
    }
}

const setPersonData = () => {
    return (dispatch) => {
        if (firebase.auth().currentUser) {
            // console.log("setPData")
            const currentUserID = firebase.auth().currentUser.uid;
            const reference = database().ref('/users/' + currentUserID);

            reference.on("value", function (snap) {

                dispatch(
                    {
                        type: "SET_PERSON_DATA",
                        name: snap.val().name,
                        email: snap.val().email
                        // payload: {name: snap.val().name, email: snap.val().email}
                    }
                )
            })
        }
    }
}

const updateUserData = (oldEmailAdress, oldPassword, newEmailAdress, newUserName, navigation) => {
    return (dispatch) => {

        if (newEmailAdress.length > 0 && newUserName.length > 0) {
            dispatch(updateUserDataRequest());
            auth().signInWithEmailAndPassword(oldEmailAdress, oldPassword).then(
                response => response.user.updateEmail(newEmailAdress).then(() => {
                    //Update firestore
                    navigation.pop();
                    const currentUserID = firebase.auth().currentUser.uid;

                    const ref = database().ref('/users/' + currentUserID);
                    ref.update({
                        name: newUserName,
                        email: newEmailAdress
                    })
                    dispatch(updateUserDataSuccess(newUserName, newEmailAdress));
                }

                )).catch(error => {
                    dispatch(updateUserDataFailure(error))
                    Alert.alert("ERROR", error.message)
                })


        }
        else {
            Alert.alert("Warning", "new user name and new email is null")
        }
    }
}

const updateUserDataRequest = () => {
    return {
        type: "UPDATE_USER_DATA_REQUEST"
    }
}

const updateUserDataSuccess = (newUserName, newEmailAdress) => {
    return {
        type: "UPDATE_USER_DATA_SUCCESS",
        userName: newUserName,
        emailAdress: newEmailAdress
    }
}
const updateUserDataFailure = (error) => {
    return {
        type: "UPDATE_USER_DATA_FAILURE",
        error: error
    }
}

export {
    fetchInviterLists,
    updateUserData,
    addToFavs,
    removeFromFavs,
    fetchFavCards,
    setPersonData,
    deleteContact,
    createList,
    deleteList,
    updateListName,
    setAllContacts
};