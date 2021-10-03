import { StyleSheet } from "react-native";


export  default buttonStyles = StyleSheet.create({
    ButtonContainer: {
        elevation: 8,
        // backgroundColor: "#009688",
        backgroundColor:"rgb(90,90,250)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:100
    },
    ButtonText: {
        fontSize: 18,
        color: "rgb(220,220,220)",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})