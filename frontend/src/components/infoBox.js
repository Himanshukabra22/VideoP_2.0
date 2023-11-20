import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// constants
import Colors from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';

const InfoBox = (props) => {
    const { id, imgSource, title, description } = props;
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.infoImg} source={imgSource} />
            </View>
            <View>
                <Text style={styles.infoHeadingTxt}>{id}. {title}</Text>
            </View>
            <View style={styles.DescriptionBox}>
                <Text style={styles.DescriptionTxt}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: 250,
        backgroundColor: Colors.typoWhite,
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: Colors.typoBlack,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 20,
    },
    infoImg: {
        width: 50,
        height: 50,
    },
    infoHeadingTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.typoBlack,
    },
    DescriptionTxt: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.typoBlack,
        textAlign: 'left',
    },
});

export default InfoBox;
