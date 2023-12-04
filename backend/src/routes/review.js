var express = require('express');
const { getAllReviews, createReview } = require('../controllers/review.controllers.js');
const { authenticate, restrict } = require("../middlewares/authentication.js");

const router = express.Router({ mergeParams: true })

//router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReview);

module.exports = router;