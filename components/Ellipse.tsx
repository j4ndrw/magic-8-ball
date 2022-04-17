import { Dimensions, StyleSheet, View, ViewProps } from "react-native";
import React, { PropsWithChildren, useMemo } from "react";

interface Props {
    styleProps: {
        backgroundColor: string;
        radius: number;
    };
}

export default function Ellipse({
    styleProps,
    children,
}: PropsWithChildren<Props>) {
    const computedStyles = useMemo(() => styles(styleProps), [styleProps]);

    return (
        <View
            style={{
                ...computedStyles.ellipse,
                ...computedStyles.container,
            }}
        >
            {children as ViewProps["children"]}
        </View>
    );
}

const styles = (styleProps: Props["styleProps"]) =>
    StyleSheet.create({
        ellipse: {
            width: Dimensions.get("window").width * styleProps.radius,
            height: Dimensions.get("window").width * styleProps.radius,
            borderRadius:
                (Dimensions.get("window").width * styleProps.radius) / 2,
            backgroundColor: styleProps.backgroundColor,
        },
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    });
