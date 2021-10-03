import React, {Component} from 'react';
import {ScrollView, StyleSheet, Alert, Image} from 'react-native';
import {
Text,
View,
Assets,
Constants,
Button,
Colors,
Typography,
ColorSwatch
} from 'react-native-ui-lib'; //eslint-disable-line
import {colors} from "../shared/Colors"


export default class User extends Component {
constructor(props) {
    super(props);
    this.state = {
    };
}


render() {

    return (
        <View centerH>
            <Button
            label={this.props.buttonText}
            borderRadius={4}
            labelStyle={{color:this.props.primary ? Colors.white : colors.lightViolet}}
            style={{margin: 20, 
            backgroundColor:this.props.primary ? colors.lightViolet : Colors.white,
            shadowColor:"black",elevation:5
        }}

            onPress = {() => this.props.onPress()}
            >
            </Button>
        </View>
    );
}
}
