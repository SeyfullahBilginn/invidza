import React, {Component} from 'react';
import { TouchableWithoutFeedbackComponent } from 'react-native';
import {Checkbox, Assets, Text, View, Colors, Spacings} from 'react-native-ui-lib'; //eslint-disable-line

class CheckBox extends Component {
state = {
    pressed: null

};

static getDerivedStateFromProps(props,state)  {
    
    if (props.pressed !== state.pressed) {
        // returns setState
        return{
            pressed: props.pressed
        }
        }
    // Return null to indicate no change to state.
    return null;
}
// if (props.pressed !== this.state.pressed) {
//     this.setState({ pressed: props.pressed });
//     }

render() {
    return (
    <View style={{alignSelf:"center",marginRight:20}} pointerEvents="none">
            <Checkbox
            
            // disabled
            size={24}
            value={this.state.pressed}
            color="rgb(79,187,213)"
            
            />
    </View>
    );
}
}

export default CheckBox;