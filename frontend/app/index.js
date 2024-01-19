import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

// constants
import Colors from '../src/constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../src/constants/screen';
import * as Platform from '../src/constants/platform';

// components
import Header from '../src/components/header';
import UploadVideo from '../src/components/uploadVideo';
import InfoBanner from '../src/components/infoBanner';
import Footer from '../src/components/footer';

const Home = (props) => {
    return (
        <>
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                <Header />
                <View style={styles.container}>
                    <View>
                        <Image source={require('../assets/images/Heading.png')} style={styles.SiteHeadingImg} />
                    </View>
                    <Image source={require('../assets/images/ColoredCircle.png')} style={styles.ColoredCircle} />
                    <View style={styles.SiteDescriptionBox}>
                        <Text style={styles.SiteDescriptionTxt}>Welcome to NoiseRemover.io{'\n'}your go-to online tool for effortless video noise removal. Say goodbye to unwanted background noise and distractions in your videos, and say hello to superior video quality.</Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.WebFrontImgBox}>
                            <Image source={require('../assets/images/WebFrontIllustration.png')} style={styles.WebFrontImg} />
                        </View>
                        <UploadVideo setScreen={props.setScreen} />
                    </View>
                    {
                        Platform.IS_WEB && width > 700 && <Image source={require('../assets/images/SwirlingArrow.png')} style={styles.SwirlingArrow} />
                    }
                    <InfoBanner />
                    <View style={styles.SiteAboutBox}>
                        <View>
                            <Image source={require('../assets/images/Illustration.png')} style={styles.IllustrationImg} />
                        </View>
                        <View style={styles.SiteAboutSubBox}>
                            <View>
                                <Image source={require('../assets/images/SiteAboutHeading.png')} style={styles.SiteAboutHeading} />
                            </View>
                            <View>
                                <Text style={styles.SiteAboutDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing egestas proin egestas amet bibendum pharetra. Et nulla eu blandit commodo proin urna, viverra  Sit id laoreet magna sem nunc. Ultricies accumsan leo suspendisse sit.</Text>
                            </View>
                        </View>
                    </View>
                    <Footer />
                </View>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    main: {
        width: width,
        backgroundColor: Colors.bg,
        maxWidth: width - 17,
    },
    container: {
        alignItems: 'center',
        width: width,
        backgroundColor: Colors.bg,
        // maxWidth: width - 17, enable max width for web only
    },
    SiteHeadingImg: {
        marginTop: 20,
        aspectRatio: 4.044,
        width: Platform.IS_LARGE_SCREEN ? (Platform.IS_MEDIUM_SCREEN ? (Platform.IS_SMALL_SCREEN ? 323 : 340) : 414) : 704,
        height: Platform.IS_LARGE_SCREEN ? (Platform.IS_MEDIUM_SCREEN ? (Platform.IS_SMALL_SCREEN ? 78 : 82) : 100) : 170,
    },
    ColoredCircle: {
        position: 'absolute',
        top: Platform.IS_LARGE_SCREEN ? 150 : 190,
        left: Platform.IS_LARGE_SCREEN ? 40 : 300,
        width: Platform.IS_LARGE_SCREEN ? 72 : 154,
        height: Platform.IS_LARGE_SCREEN ? 70 : 150,
        transform: [{ scaleX: 1 }],
    },
    SiteDescriptionBox: {
        marginTop: 10,
        width: Platform.IS_LARGE_SCREEN ? '80%' : width * 0.522,
        letterSpacing: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SiteDescriptionTxt: {
        color: Colors.typoBlack,
        fontSize: Platform.IS_LARGE_SCREEN ? 16 : 18,
        fontWeight: Platform.IS_LARGE_SCREEN ? '300' : '400',
        textAlign: 'center',
    },
    mainContainer: {
        width: '100%',
        paddingHorizontal: Platform.IS_LARGE_SCREEN ? 0 : 100,
        flexDirection: Platform.IS_LARGE_SCREEN ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    WebFrontImgBox: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    WebFrontImg: {
        width: Platform.IS_XLARGE_SCREEN ? (Platform.IS_LARGE_SCREEN ? 290 : 380) : 450,
        height: Platform.IS_XLARGE_SCREEN ? (Platform.IS_LARGE_SCREEN ? 290 : 380) : 450,
    },
    SwirlingArrow: {
        position: 'absolute',
        top: 70,
        right: 140,
        width: 310,
        height: 310,
    },
    ShadeCircles: {
        aspectRatio: 1,
        position: 'absolute',
        left: 0,
        bottom: -150,
        width: 800,
        zIndex: -1,
    },
    SiteAboutBox: {
        width: '80%',
        paddingBottom: 50,
        marginVertical: 50,
        marginBottom: 100, 
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    IllustrationImg: {
        position: 'relative',
        top: 70,
        width: Platform.IS_LARGE_SCREEN ? 200 : 380,
        height: Platform.IS_LARGE_SCREEN ? 200 : 380,
    },
    SiteAboutSubBox: {
        alignItems: 'flex-end',
    },
    SiteAboutHeading: {
        width: 600,
        height: 218,
    },
    SiteAboutDesc: {
        fontSize: Platform.IS_LARGE_SCREEN ? 14 : 26,
        fontWeight: '300',
        color: Colors.typoBlack,
        textAlign: 'left',
        marginTop: 15,
        maxWidth: 500,
        height: '100%',
    },
});

export default Home;
