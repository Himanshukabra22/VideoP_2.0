import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

// constants
import Colors from '../../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../../constants/screen';

const Default = (props) => {
    const { driveUrl, setDriveUrl, onLinkSubmit } = props;

    return (
        <>
            <View style={styles.firstContainer}>
                <View style={styles.headingView}>
                    <Text style={styles.headingTxt}>Paste the Drive URL Link{'\n'}to remove the noise</Text>
                </View>
                <View style={styles.driveInputView}>
                    <TextInput
                        style={styles.driveInput}
                        placeholder="Google Drive URL"
                        onChangeText={(text) => setDriveUrl(text)}
                        value={driveUrl}
                    />
                    <TouchableOpacity activeOpacity={0.75} style={styles.driveInputBtn} onPress={() => onLinkSubmit()}>
                        <Text style={styles.driveInputBtnTxt}>Upload</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.InstructionsView}>
                    <View style={styles.NoteView}>
                        <Text style={styles.commonTxt}><Text style={styles.NoteTxt}>Note:</Text> Ensure that the Google Drive link provided is not restricted.{'\n'}Set <Text style={styles.BoldTxt}>'Manage Access'</Text> to <Text style={styles.BoldTxt}>"Anyone with the link"</Text> for smooth accessibility.</Text>
                    </View>
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
    driveInputView: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
    driveInput: {
        width: '40%',
        height: 60,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 20,
    },
    driveInputBtn: {
        width: '10%',
        height: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: Colors.typoBlack,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 10,
    },
    driveInputBtnTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.typoWhite,
    },
    InstructionsView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    NoteView: {
        marginTop: 40,
    },
    commonTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.typogrey,
        textAlign: 'center',
    },
    NoteTxt: {
        fontSize: 18,
        fontWeight: '700',
    },
    BoldTxt: {
        fontWeight: '600',
    },
});

export default Default;
