import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// constants
import Colors from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';
import * as Platform from '../constants/platform';

// components
import InfoBox from './infoBox';

const InfoBanner = () => {

    const Arr = [
        {id: 1, imgSource: require('../../assets/images/Upload.png'), title: 'Upload', description: 'Upload your video file to the Google Drive.'},
        {id: 2, imgSource: require('../../assets/images/Image.png'), title: 'Remove', description: 'Provide the Link of the file to the website and remove the noise.'},
        {id: 3, imgSource: require('../../assets/images/Download.png'), title: 'Download', description: 'Once the process is complete, download the file.'},
    ]

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.containerHeading}>How to use the noise Remover</Text>
            </View>
            <View>
                <Text style={styles.HowtoInfoTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sagittis lorem id{'\n'}lobortis facilisis pulvinar. Vitae mattis bibendum consequat dapibus.</Text>
            </View>
            <View style={styles.subContainer}>
                {Arr.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <InfoBox id={item.id} imgSource={item.imgSource} title={item.title} description={item.description} />
                        {index < Arr.length - 1 && <Image source={require('../../assets/images/SwirlingRight.png')} style={{ width: 180, height: 98 }} />}
                    </React.Fragment>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        marginTop: Platform.IS_LARGE_SCREEN ? 10 : 20,
        paddingVertical: Platform.IS_LARGE_SCREEN ? 10 : 20,
        paddingHorizontal: 10,
        backgroundColor: Colors.primary,
    },
    containerHeading: {
        fontSize: Platform.IS_LARGE_SCREEN ? 24 : 32,
        fontWeight: '600',
        color: Colors.typoWhite,
        textAlign: 'center',
    },
    HowtoInfoTxt: {
        fontSize: Platform.IS_LARGE_SCREEN ? 14 : 16,
        fontWeight: '400',
        color: Colors.typoBlack,
        textAlign: 'center',
        marginTop: 15,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 50,
        paddingHorizontal: 80,
    },
});

export default InfoBanner;
