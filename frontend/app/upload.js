import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

// constants
import Colors from "../src/constants/colors";
import {
  SCREEN_WIDTH as width,
  SCREEN_HEIGHT as height,
} from "../src/constants/screen";

//  components
import Header from "../src/components/header";
import InfoBanner from "../src/components/infoBanner";
import Default from "../src/components/upload/default";
import Processing from "../src/components/upload/processing";
import Download from "../src/components/upload/download";

const Upload = () => {
  const [driveUrl, setDriveUrl] = useState("");
  const [JOBID, setJOBID] = useState(null);
  const [complete, setComplete] = useState(false);
  const [loader, setLoader] = useState(false);

  let statusCheckInterval;
  console.log(process.env.EXPO_PUBLIC_BASE_URL);
  const onLinkSubmit = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoLink: driveUrl,
        }),
      });

      if (!response.ok) {
        console.error("Error:", response.status);
        return;
      }

      const result = await response.json();

      if (result.status === "ok") {
        console.log("Success:", result.message);
        setJOBID(result.jobId);
        setLoader(true);
      } else {
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const checkStatus = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BASE_URL}/jobCheck/${JOBID}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        console.error("Error:", response.status);
        return;
      }

      const result = await response.json();

      if (result.status === "ok") {
        if (result.message === "Job processed completely.") {
          console.log("Job processed completely.");
          setComplete(true);
        } else {
          console.log("Job is still processing.");
        }
      } else {
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Start checking status when JOBID is not null
  useEffect(() => {
    if (JOBID && !complete) {
      console.log("Starting status check...");
      statusCheckInterval = setInterval(checkStatus, 1000);

      // Cleanup function to clear the interval when the component unmounts or JOBID becomes null
      return () => {
        console.log("Clearing interval...");
        clearInterval(statusCheckInterval);
      };
    }
  }, [JOBID, complete]);

  // Additional useEffect to stop the interval when the job is complete
  useEffect(() => {
    if (complete) {
      console.log("Job is complete. Clearing interval...");
      clearInterval(statusCheckInterval);
      setLoader(false);
    }
  }, [complete]);

  return (
    <>
      <Header />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {loader ? (
            <Processing />
          ) : complete ? (
            <Download
              setComplete={setComplete}
              JOBID={JOBID}
              setJOBID={setJOBID}
              setDriveUrl={setDriveUrl}
            />
          ) : (
            <>
              <Default
                driveUrl={driveUrl}
                setDriveUrl={setDriveUrl}
                onLinkSubmit={onLinkSubmit}
              />
              <InfoBanner />
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: width,
    backgroundColor: Colors.bg,
    maxWidth: width - 17,
  },
  container: {
    width: "100%",
    backgroundColor: Colors.bg,
    alignItems: "center",
  },
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
  driveInputView: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  driveInput: {
    width: "40%",
    height: 60,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  driveInputBtn: {
    width: "10%",
    height: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.typoBlack,
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: 10,
  },
  driveInputBtnTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.typoWhite,
  },
  InstructionsView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  NoteView: {
    marginTop: 40,
  },
  commonTxt: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.typogrey,
    textAlign: "center",
  },
  NoteTxt: {
    fontSize: 18,
    fontWeight: "700",
  },
  BoldTxt: {
    fontWeight: "600",
  },
});

export default Upload;
