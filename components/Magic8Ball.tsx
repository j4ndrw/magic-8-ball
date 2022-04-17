import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Ellipse from "./Ellipse";
import { createAnswer } from "../services/createAnswer";
import { Answer } from "../models/Answer";
import Shake from "react-native-shake";

export default function Magic8Ball() {
    const [answer, setAnswer] = useState<Answer>(createAnswer());

    useEffect(() => {
        const onShake = () => setAnswer(createAnswer());
        Shake.addListener(onShake);
        return () => {
            Shake.removeAllListeners();
        };
    }, []);

    return (
        <View>
            <Ellipse
                styleProps={{
                    backgroundColor: "#000",
                    radius: 0.75,
                }}
            >
                <Ellipse
                    styleProps={{
                        backgroundColor: "#FFF",
                        radius: 0.5,
                    }}
                >
                    <Text style={styles.text}>{answer}</Text>
                </Ellipse>
            </Ellipse>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
});
