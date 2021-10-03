import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';


const watchPersonData = () => {
    return function(dispatch) {
    firebase.database().ref("person").on("value", function(snapshot)
    { 
        var personData = snapshot.val();
        var actionSetPersonData = setPersonData(personData);
        dispatch(actionSetPersonData);
    }, function(error) { console.log(error); });
    }
};

export {watchPersonData};