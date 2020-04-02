const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const Employee_dataSchema = new Schema({
  employee_name: {
    type: String,
    required: true,
    ref: '_id',
  },
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true

  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Employee_data = mongoose.model("employee_data", Employee_dataSchema);