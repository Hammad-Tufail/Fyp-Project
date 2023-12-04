const mongoose = require("mongoose")
const Doctor = require("../models/doctor.model")

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// reviewSchema.model.pre(/^find/, function (next) {
//   this.populate({
//     path: "user",
//     select: "name photo"
//   });

//   next();
// });

// reviewSchema.model.static.calAverageRatings = async function (doctorId) {

//   const stats = await this.aggregate([{
//     $match: { doctor: doctorId }
//   },
//   {
//     $group: {
//       _id: '$doctor',
//       numberOfRating: { $sum: 1 },
//       avgRating: { $avg: $rating },

//     }
//   }

//   ])
//   // console.log(stats);
//   await Doctor.findByIdAndUpdate(doctorId, {
//     totalRating: stats[0].numOfRating,
//     averageRating: stats[0].avgRating,
//   })
// };
// reviewSchema.model.post('save', function () {
//   this.constructor.calAverageRatings(this.doctor);
// });

module.exports = mongoose.model("Review", reviewSchema);