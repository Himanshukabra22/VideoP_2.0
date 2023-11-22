import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// constants
import Colors from '../../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../../constants/screen';

const Processing = () => {
    return (
        <>
            <View style={styles.firstContainer}>
                <View style={styles.headingView}>
                    <Text style={styles.headingTxt}>We are Processing your Video.{'\n'}Just wait for a while</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    firstContainer: {
        width: '100%',
        height: height - 90,
        alignItems: 'center',
        paddingTop: 100,
    },
    headingView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
    },
    headingTxt: {
        fontSize: 60,
        fontWeight: 'bold',
        color: Colors.typogreydark,
        letterSpacing: 0.75,
        textAlign: 'center',
    },
});

export default Processing;
