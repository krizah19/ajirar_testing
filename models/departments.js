const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const departmentsSchema = new Schema({
name: {
    type: String,
    required: true,
    ref: '_id'
  },
  company: {
      type: String,
      required: true,
      ref: 'companies',
  },
});

module.exports = departments = mongoose.model("departments", departmentsSchema);