import React, { useEffect, useState, createRef, useRef } from 'react';
import {
    Dimensions, SafeAreaView, FlatList, StyleSheet, PixelRatio, Alert
} from 'react-native';
import { colors } from '../../shared/Colors';
import { View, Text, TouchableOpacity, Card, Colors } from "react-native-ui-lib";
import YouTube from 'react-native-youtube';
import BackOpacity from '../../shared/BackOpacity';
import Button from "../../buttons/Button"
import { ScrollView } from 'react-native-gesture-handler';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;


export default function InvitationCardDetail({ route, navigation }) {
    const [details, setDetails] = useState([])
    const { item } = route.params;
    const [isReady, setİsReady] = useState(false);
    const [status, setStatus] = useState("");
    const [quality, setQuality] = useState("");
    const [error, setError] = useState("");


    const getParams = async () => {
        await setDetails(item)
    }
    console.log("Invitation Card Detail")
    useEffect(() => {
        setDetails(item)
    }, [])
    const youtubePlayerRef = useRef();
    return (
        <SafeAreaView>
            <View height={60} backgroundColor={colors.lightViolet}
                row alignItems="center" justifyContent="space-between">
                <View row alignItems="center">
                    <BackOpacity navigation={navigation} />
                    <Text color="white" text50 marginL-20>{details.label}</Text>
                </View>
            </View>
            {
                (!details) ? (
                    <View style={{ flex: 1, backgroundColor: "red" }}>
                        <Text>{details}</Text>

                    </View>
                )
                    :
                    (

                        <ScrollView style={{}}>
                            {/* HEADER */}

                            <View margin-10>
                                {
                                    (details.videoId) ?
                                        <YouTube
                                            videoId={details.videoId} // The YouTube video ID
                                            ref={youtubePlayerRef}
                                            apiKey="AIzaSyDr4ltpgVNoOruiC6AEqQUnipMJMnTf92w"
                                            // play // control playback of video with true/false
                                            // fullscreen // control whether the video should play in fullscreen or inline
                                            // loop // control whether the video should loop when ended

                                            onReady={e => setİsReady(true)}
                                            onChangeState={e => setStatus(e.state)}
                                            onChangeQuality={e => setQuality(e.quality)}
                                            onError={e => setError(e.error)}
                                            style={{
                                                alignSelf: 'stretch',
                                                height: 1080 * (ScreenWidth - 20) / 706 / 2, width: ScreenWidth - 20
                                            }}
                                        />
                                        :
                                        (null)
                                }
                                <View marginT-10 style={{}}>
                                    <Text marginT-5 style={styles.text}>{details.exp1}</Text>
                                    <Text marginT-5 style={styles.text}>{details.exp2}</Text>
                                    <Text marginT-5 style={styles.text}>{details.exp3}</Text>
                                </View>
                                <View row style={{ alignItems: "center", justifyContent: "space-between" }}>
                                    <View>
                                        <View row style={{ alignItems: "flex-end" }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{details.unitPrice}</Text>
                                            <Text style={{ fontSize: 14 }}> / Adet</Text>
                                        </View>

                                    </View>
                                    {/* <View style={{alignItems:"center"}}> */}
                                    <Button
                                        buttonText="Davetiyeni Oluştur"
                                        primary={false}
                                        onPress={() => navigation.push("Draft")}
                                    />

                                    {/* </View> */}

                                </View>
                            </View>

                        </ScrollView>
                    )

            }


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        letterSpacing: 0.1,
        fontWeight: "800",
        includeFontPadding: true,
        color: Colors.grey20
    }
})