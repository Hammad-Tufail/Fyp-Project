const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Session = new Schema({
  refreshToken: {
    type: String,
    default: "",
  },
})

const Doctor = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  doctorPhotoLink: {
    type: String,
    default: null
  },
  password: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true
  },
  refreshTokens: {
    type: [Session],
  },

  //////I ADDED////

  qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },
  
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],

})

module.exports = mongoose.model("Doctor", Doctor)