import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// constants
import Colors from "../../constants/colors";
import {
  SCREEN_WIDTH as width,
  SCREEN_HEIGHT as height,
} from "../../constants/screen";

const Download = (props) => {
  const { setComplete, JOBID, setJOBID, setDriveUrl } = props;
  return (
    <>
      <View style={styles.firstContainer}>
        <View style={styles.headingView}>
          <Text style={styles.headingTxt}>Your Video is ready to download</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.ThanksContainer}>
            <Text style={styles.Info1}>
              Thank you for using our noise removal application! We appreciate
              your trust in our service. Your video has been processed
              successfully, and it's now ready for download.
            </Text>
            <Text style={styles.Info2}>
              Download your enhanced video now and experience the improved audio
              quality.
            </Text>
          </View>
          <View style={styles.Buttons}>
            <TouchableOpacity
              style={styles.DownloadBtn}
              onPress={() => {
                window.open(
                  `${process.env.EXPO_PUBLIC_BASE_URL}/jobs/${JOBID}`
                );
              }}
            >
              <Text style={styles.DownloadBtnTxt}>Download Your Video</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.uploadAnotherBtn}
              onPress={() => {
                setComplete(false);
                setJOBID(null);
                setDriveUrl("");
              }}
            >
              <Text style={styles.uploadAnotherTxt}>Upload Another Link</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    width: "100%",
    height: height - 90,
    alignItems: "center",
    paddingTop: 100,
  },
  headingView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  headingTxt: {
    fontSize: 60,
    fontWeight: "bold",
    color: Colors.typogreydark,
    letterSpacing: 0.75,
    textAlign: "center",
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
  },
  ThanksContainer: {
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  Info1: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.typogreydark,
    letterSpacing: 0.75,
    textAlign: "center",
  },
  Info2: {
    width: "80%",
    fontSize: 20,
    fontWeight: "600",
    color: Colors.typogreydark,
    letterSpacing: 0.75,
    textAlign: "center",
    paddingTop: 20,
  },
  Buttons: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  DownloadBtn: {
    width: "35%",
    height: 60,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  DownloadBtnTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.typoWhite,
  },
  uploadAnotherBtn: {
    width: "30%",
    height: 60,
    backgroundColor: Colors.typoBlack,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  uploadAnotherTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.typoWhite,
  },
});

export default Download;
