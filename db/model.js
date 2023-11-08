const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
      },
    id: {
        type: Number,
        required: true
      },
    cryptostring: {
        type: String,
        required: true,
        unique: true,
      },
    date: {
        type: Number,
        required: true,
      }
});

//we will create a new connection

const keypairData = new mongoose.model('Data', dataSchema);
module.exports = keypairData;