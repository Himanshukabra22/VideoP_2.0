import React, { useState } from "react";
import {
    StyleSheet,
    ImageBackground,
} from "react-native";

// constants
import Colors from '../../constants/colors';
import {
    SCREEN_WIDTH as width,
    SCREEN_HEIGHT as height,
} from "../../constants/screen";

const Bg = () => {
    return (
        <>
            <ImageBackground
                style={styles.ImgCorner1}
                source={require("../../../assets/images/AuthBgCorner1.png")}
            />
            <ImageBackground
                style={styles.ImgCorner2}
                source={require("../../../assets/images/AuthBgCorner2.png")}
            />
        </>
    );
};

const styles = StyleSheet.create({
    ImgCorner1: {
        position: "absolute",
        top: 0,
        right: 0,
        width: height,
        height: height,
        zIndex: -1,
    },
    ImgCorner2: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: height / 2,
        height: height / 2,
        zIndex: -1,
    },
});

export default Bg;
