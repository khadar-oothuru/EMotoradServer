const mongoose = require('mongoose');

const applicatantsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instagram: { type: String, default: "" },
  youtube: { type: String, default: "" },
});

const Applicants = mongoose.model('Applicants', applicatantsSchema);

module.exports = Applicants
