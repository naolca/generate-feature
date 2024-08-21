const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  // Define your schema here
});

module.exports = mongoose.model('feature', featureSchema);
