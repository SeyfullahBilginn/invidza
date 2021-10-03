import React, { useEffect, useState, useLayoutEffect, useReducer } from 'react';
import {
    View, ActivityIndicator,
    SafeAreaView, StyleSheet
} from 'react-native';
import { colors } from './Colors';

export default function MyActivityIndıcator() {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.blue} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});
