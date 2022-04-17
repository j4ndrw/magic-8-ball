import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react-native";
import { Magic8Ball } from "./components";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#5BB8FF" />
            <Magic8Ball />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#84CAFF",
        alignItems: "center",
        justifyContent: "center",
    },
});
