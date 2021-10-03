import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView, Dimensions, Text} from 'react-native';
import {Colors, View, Button, TabBar, TabController} from 'react-native-ui-lib';
// import { Icon } from 'react-native-vector-icons/Icon';



const themeColors = [Colors.violet30, Colors.green30, Colors.red30, Colors.blue30, Colors.yellow30];
const win = Dimensions.get('window');

import ContactList from "../screens/contacts/ContactLists";
import Templates from "../screens/categories/Templates";
import User from '../screens/User/User';

const templateIcon = require("../assets/icons/dashboard-24.png");
const contactsIcons = require("../assets/icons/notebook-of-contacts-24.png");
const userIcon = require("../assets/icons/profile-user-24.png");
import { useNavigation } from '@react-navigation/native';

export default class TabBarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        }
    render() {
        const navigation = this.props.navigation;
        return (
                
            <View bg-dark80 style={{width:"100%",bottom:0,position:"absolute"}}>
            <TabBar
                style={styles.tabbar}
                // bg-dark70
                // selectedIndex={1}
                enableShadow
                height={win.height/12}
                indicatorStyle={{backgroundColor: "white"}}
                // tabletMargins={{portrait: 0, landscape: 0}}
            >

                <TabBar.Item label="Contacts"  showDivider={true} selectedLabelStyle={{color:Colors.white}} 
                    labelStyle={{color:"rgb(200,200,200)",fontWeight:"bold",fontSize:12}}  
                    uppercase backgroundColor={Colors.violet30}
                    icon={contactsIcons} 
                    /> 
                <TabBar.Item label="Templates" showDivider={true} selectedLabelStyle={{color:"rgb(255,255,255)"}}
                    labelStyle={{color:"rgb(200,200,200)",fontWeight:"bold",fontSize:12}}
                    uppercase backgroundColor={Colors.violet30} 
                    icon={templateIcon}  />
                <TabBar.Item label="User"  selectedLabelStyle={{color:"rgb(255,255,255)"}}
                    labelStyle={{color:"rgb(200,200,200)",fontWeight:"bold",fontSize:12}}
                    uppercase backgroundColor={Colors.violet30}
                    icon={userIcon}  
                    style={{}}/>
            </TabBar>
    
    
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
tabbar: {
    // marginVertical: 10,
}
});