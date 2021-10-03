import { addToFav, removeFromFav } from "../../firebase/firestore";
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const INITIAL_STATE = {
    userData: {
        name: "",
        email: "",
        loading: false,
        error: ""
    },
    favs: [],
    inviterLists: {
        lists: [],
        loading: false,
        error: ""
    },
    allContacts: []
}

const favCardsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_FAVS":
            return {
                ...state,
                favs: [...state.favs, action.payload]
            };
            // return state;
            break;
        case "REMOVE_FROM_FAVS":
            return {
                ...state,
                favs: state.favs.filter((item) => item !== action.payload)
            };
            break;
        case "CREATE_LIST":
            var list = state.inviterLists.lists;
            console.log("createList");
            list.push({ name: action.listName, contacts: action.contacts });
            console.log(list.length);
            return {
                ...state,
                inviterLists: {
                    ...state.inviterLists,
                    lists: list
                } 
            }
        case "DELETE_CONTACT":
            // console.log("DELETE_CONTACT")
            var invList = [];
            state.inviterLists.lists.map(list => {
                // console.log(list)
                if (list.name === action.listName) {
                    // console.log(list)
                    var newL = list.contacts.filter(item => item !== action.deletedContact)
                    // console.log(newL)
                    invList.push({ name: action.listName, contacts: newL });
                } else {
                    invList.push(list);
                }
            })
            return {
                ...state,
                inviterLists: {
                    ...state.inviterLists,
                    lists: invList
                }
            };
        // return state
        case "DELETE_LIST":
            return {
                ...state,
                inviterLists:{
                    lists: state.inviterLists.lists.filter(list => list.name !== action.listName)
                } 
            }
        case "UPDATE_LIST_NAME":
            state.inviterLists.map(list =>
                list.name === action.oldListName ? list.name = action.newListName : (null))

            return state;
        case "FETCH_FAV_CARDS_SUCCESS":
            return {
                ...state,
                favs: action.payload,
            };
            break;

        case "FETCH_FAV_CARDS_FAILURE":
            return [];
            break;

        case "FETCH_INVITERS_LIST_REQUEST":
            return {
                ...state,
                inviterLists: {
                    ...state.inviterLists,
                    loading: true
                }
            }
            break;
        case "FETCH_INVITERS_LIST_SUCCESS":
            return {
                ...state,
                inviterLists: {
                    lists: action.payload,
                    loading: false
                }
            }
            break;
        case "FETCH_INVITERS_LIST_FAILURE":
            return {
                ...state,
                inviterLists: {
                    ...state.inviterLists,
                    loading: false,
                    error: action.error
                }
            }
            break;
        case "SET_ALL_CONTACTS":
            return {
                ...state,
                allContacts: action.contacts
            };
        case "SET_PERSON_DATA":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.name,
                    email: action.email
                }
            }
        case "UPDATE_USER_DATA_REQUEST":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    loading: true
                }
            }
        case "UPDATE_USER_DATA_SUCCESS":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.userName,
                    email: action.emailAdress,
                    loading: false
                }
            }
        case "UPDATE_USER_DATA_FAILURE":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state;
            break;
    }
}

export default favCardsReducer;