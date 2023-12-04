const Review = require("../models/review.model.js");
const Doctor = require("../models/doctor.model.js");

////////get reviews//////
async function getAllReviews(req, res,) {
    try {
        const reviews = await Review.find({});

        res
            .status(200)
            .json({ success: true, message: "Successful", data: reviews });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};

/////// create review//////
async function createReview(req, res) {
    if (!req.body.id) req.body.doctor = req.params.doctorId
    if (!req.body.id) req.body.user = req.userId

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id },
        });
        res
            .status(200)
            .json({ success: true, message: "Review submitted", data: savedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
