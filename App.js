import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  // View,
  BackHandler
} from 'react-native';
import View from 'react-native-ui-lib/view';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Contacts from 'react-native-contacts';

import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'


import { AuthProvider } from "./src/navigations/AuthProvider"
import Routes from "./src/navigations/Routes"

import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux'

import { Provider } from "react-redux"
import store from "./src/redux/store"
import { getFavourites } from "./src/firebase/firestore"

import { contactsStore } from "./src/stores/ContactsStore"
import { listsStore } from './src/stores/ListsStore';
import { setAllContacts } from './src/redux/actions/favCardsAction';

export default function App() {

  const dispatch = useDispatch();
  // const state = useSelector((state) => state)


  useEffect(async () => {
    await request(PERMISSIONS.ANDROID.READ_CONTACTS).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          )
          break
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but request able',
          )
          BackHandler.exitApp();
          break
        case RESULTS.GRANTED:
          getContacts()

          break
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not request able anymore')
          break
        // RESULTS
      }
    })

  })

  const getContacts = () => {
    const allContacts = [];
    contactsStore.allContacts = [];
    contactsStore.emptyAllContacts();
    Contacts.getAll().then(contacts => {
      (contacts.map(contact => {

        if (contact.phoneNumbers.length > 0 && contact.givenName.length > 0) {
          // console.log(contact.givenName)
          contactsStore.addAllContacts(
            {
              givenName: contact.givenName,
              familyName: contact.familyName,
              phoneNumber: contact.phoneNumbers[0].number,
              imageAdress: contact.imAddresses,
              recordID: contact.recordID,
              pressed: false,
            }
          )
          allContacts.push({
            givenName: contact.givenName,
            familyName: contact.familyName,
            phoneNumber: contact.phoneNumbers[0].number,
            imageAdress: contact.imAddresses,
            recordID: contact.recordID,
            pressed: false,
          })
        }
        console.log("1")
      }))
    }).finally(() => {
      console.log("2")
        allContacts.sort((a,b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
        dispatch(setAllContacts(allContacts));

    })
    // .finally(() => {
    //   contactsStore.sortAllContacts();
    //   // sort all contacts and save to redux state 
    //   allContacts.sort((a,b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
    //   // console.log("allContacts: ");
    //   // console.log(allContacts.length);
    //   // dispatch(setAllContacts(allContacts));
    //   // console.log("FINALLLY");
    //   // console.log(contactsStore.allContacts)

    // }
    // )

  }

  return (

    <AuthProvider>
      <Routes />
    </AuthProvider>
  );

};
