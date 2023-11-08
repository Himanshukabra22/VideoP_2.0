const Queue = require("bull");
const { exec } = require("child_process");

const videoQueue = new Queue("videoQueue", "redis://localhost:6379");

function getDirectDownloadLink(driveLink) {
  const regex = /\/d\/(.+?)\/(?:view|edit|export)/;
  const match = driveLink.match(regex);

  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return driveLink; // Return null if the input is not a valid Google Drive link
}

videoQueue.process(async (job) => {
  try {
    let videoLink = job.data.videoLink;
    videoLink = getDirectDownloadLink(videoLink);

    // Execute FFmpeg command for noise reduction
    const outputFileName = `processed_${Date.now()}.mkv`;
    const inputVideo = `input-video_${Date.now()}.mkv`;

    const command = `mkdir -p input_files && mkdir -p output_files && wget --timeout=300 -c -O ./input_files/${inputVideo} "${videoLink}" && ffmpeg -i ./input_files/${inputVideo} -af "highpass=f=200, lowpass=f=3000, afftdn=nf=-25" ./output_files/${outputFileName}`;

    // Execute the FFmpeg command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error processing video: ${error}`);
        job.moveToFailed({ message: "Video processing failed." }, true);
      } else {
        console.log(`Video processed successfully: ${outputFileName}`);
        job.moveToCompleted({ processedVideo: outputFileName }, true);
      }
      exec(`rm ./input_files/${inputVideo}`);
    });
    // Return a promise to indicate the completion of the job processing
    return new Promise((resolve, reject) => {
      resolve();
    });
  } catch (error) {
    console.log(`Video is not processed due to error : ${error}`);
    return new Promise((resolve, reject) => {
      reject();
    });
  }
});

module.exports = videoQueue;
