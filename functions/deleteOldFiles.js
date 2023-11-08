const path = require("path");
const fs = require("fs");

const directoryPath = "./output_files";

function deleteOldFiles() {
  const cutoffTime = Date.now() - 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && stats.ctimeMs < cutoffTime) {
      fs.unlinkSync(filePath);
      console.log(`Deleted file: ${file}`);
    }
  });
};

module.exports = { deleteOldFiles };
