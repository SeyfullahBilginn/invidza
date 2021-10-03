
import React from 'react';
import {StyleSheet, Alert, FlatList, BackHandler, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {Colors, View,
    Text} from 'react-native-ui-lib';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Contacts from 'react-native-contacts';
import CheckBox from './CheckBox';
import * as Animatable from 'react-native-animatable';
import {contactsStore} from "../stores/ContactsStore"


// import ContactsStore from "../stores/ContactsStore"

class Contactlists extends React.PureComponent{
    

    constructor(props) {
        super(props)

        this.state = {
            // change pressed of that contact when touched any contact
            pressed: this.props.item.pressed,
            // added contacts
            // contacts: []
        };
    }

    onTrigger = () => {
        this.props.parentCallback(
            this.props.item
            );
        // event.preventDefault();
    }
    componentDidMount() {
    }
    


    render() {

        const boldTextHandler = () => {
            return(
                
                            
                    //query bos değil
                    this.props.query ? 
                    (
                        
                        this.props.item.givenName.toLowerCase().includes(this.props.query.toLowerCase()) ?
                        (
                        <View row margin-5>
                            <View row >
                                
                                {/* Bold part of searched data */}
                                <Text text60 numberOfLines={1} style={{color:Colors.orange10}}>{this.props.item.givenName.substr(0,this.props.query.length)}</Text>
                                {/* non-bold part of searched data */}
                                <Text text60 numberOfLines={1}>{this.props.item.givenName.substr(this.props.query.length)}</Text>
                            </View>
                            <Text text60 numberOfLines={1} style={{marginLeft:5}}>
                                {this.props.item.familyName}
                            </Text>
                        </View>
                        )
                        :
                        
                        (

                        <View row margin-5>
                            <Text text60 numberOfLines={1}>
                                {this.props.item.givenName}
                            </Text>
        
                            <View  row  marginL-5>
                                <Text text60 numberOfLines={1} style={{color:Colors.orange10}}>
                                    {this.props.item.familyName.substr(0,this.props.query.length)}
                                </Text>
                                <Text numberOfLines={1} text60 >
                                    {this.props.item.familyName.substr(this.props.query.length)}
                                </Text>
                            </View>
                        </View>
                        )
                        
                    )
                    
                    :
                    //query bos
                    (
                    
                    <View row>
                        <Text numberOfLines={1} text60 style={{margin:5,marginLeft:5}}>{this.props.item.givenName}</Text>
                        <Text numberOfLines={1} text60 style={{margin:5,marginLeft:5}}>{this.props.item.familyName}</Text>
                    </View>
        
                    )
                    
                    )
        }

        const changePressed = async() => {
            this.props.item.pressed ? (
                this.setState({pressed:false}),
                this.props.item.pressed = false,
                //add to Mobx
                await contactsStore.removeContact({
                    givenName: this.props.item.givenName,
                    familyName: this.props.item.familyName,
                    phoneNumber: this.props.item.phoneNumber
                })

                )
                : 
                (
                    this.setState({pressed:true}),
                    this.props.item.pressed = true,

                    await contactsStore.addContact({
                        givenName: this.props.item.givenName,
                        familyName: this.props.item.familyName,
                        phoneNumber: this.props.item.phoneNumber
                    })
                    )
                }
            return (
            <TouchableOpacity 
            style={{elevation:0,shadowColor:Colors.grey30,margin:5,marginVertical:3,
                backgroundColor:Colors.grey80,
                justifyContent:"center",borderColor:Colors.grey40,
                borderBottomWidth:0.2
            }}
            onPress={() => {
                changePressed();
            this.onTrigger(); }}
            >
            <View style={{margin:10,justifyContent:"center"}}>
            
                {
                boldTextHandler()
                }  
                <Text text80 style={{margin:2,marginLeft:5}}>{this.props.item.phoneNumber}</Text>
                
                <View 
                    style={{position:"absolute",right:0}}
                >
                <CheckBox pressed={this.props.item.pressed} pointerEvents={"none"}/>
                </View>
            
            </View>
            </TouchableOpacity>
        );
    }
    
};



export default Contactlists;
const styles = StyleSheet.create({

    border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark70
    }
});
