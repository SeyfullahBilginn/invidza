import React,{useEffect,useState,createRef,useRef} from 'react';
import {
Dimensions,SafeAreaView, FlatList, StyleSheet, TextInput, Alert
} from 'react-native';
import { colors } from '../../shared/Colors';
import { View,Text,TouchableOpacity,Card,Colors} from "react-native-ui-lib";

import { Linking } from "react-native";

import SendSMS from 'react-native-sms';
import BackOpacity from '../../shared/BackOpacity';

export default function Draft({navigation}) {

    // const [mobileNumber, setMobileNumber] = useState('905058338918');
    // const [bodySMS, setBodySMS] = useState(
    //   'Please follow https://www.youtube.com/watch?v=4Y_fR358yww',
    // );

    useEffect(() => {
      console.log("navigation")
      console.log(navigation)
    }, [])

    const initiateSMS = () => {
        // Check for perfect 10 digit length
        if (mobileNumber.length != 10) {
          alert('Please insert correct contact number');
          return;
        }
    
        SendSMS.send(
          {
            // Message body
            body: bodySMS,
            // Recipients Number
            recipients: [mobileNumber],
            // An array of types 
            // "completed" response when using android
            successTypes: ['sent', 'queued'],
          },
          (completed, cancelled, error) => {
            if (completed) {
              console.log('SMS Sent Completed');
            } else if (cancelled) {
              console.log('SMS Sent Cancelled');
            } else if (error) {
              console.log('Some error occured');
            }
          },
        );
      };
      const shareToWhatsAppWithContact = (text, phoneNumber) => {
        Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
       }
       return(
         <View>
           <Text>DRAFT</Text>
         </View>
       )
    // return(
    // <SafeAreaView>

    //   <View height={60} backgroundColor={colors.lightViolet}
    //         row alignItems="center" justifyContent="space-between">
    //         <View row alignItems="center">
    //               <BackOpacity navigation={navigation} />
    //         {/* <Text color="white" text50 marginL-20>{details.label}</Text> */}
    //       </View>
    //   </View>

    //   <View style={styles.container}>
    //     <Text style={styles.titleText}>
    //       Example to Send Text SMS on Button Click in React Native
    //     </Text>
    //     <Text style={styles.titleTextsmall}>
    //       Enter Mobile Number
    //     </Text>
    //     <TextInput
    //       value={mobileNumber}
    //       onChangeText={
    //         (mobileNumber) => setMobileNumber(mobileNumber)
    //       }
    //       placeholder={'Enter Conatct Number to Call'}
    //       keyboardType="numeric"
    //       style={styles.textInput}
    //     />
    //     <Text style={styles.titleTextsmall}>
    //       Enter SMS body
    //     </Text>
    //     <TextInput
    //       value={bodySMS}
    //       onChangeText={(bodySMS) => setBodySMS(bodySMS)}
    //       placeholder={'Enter SMS body'}
    //       style={styles.textInput}
    //     />
    //     <TouchableOpacity
    //       activeOpacity={0.7}
    //       style={styles.buttonStyle}
    //       onPress= { () => {
    //         // initiateSMS();
    //         shareToWhatsAppWithContact(bodySMS,mobileNumber)
    //       } }>
    //       <Text style={styles.buttonTextStyle}>
    //         Send Message
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   </SafeAreaView>
    // )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});