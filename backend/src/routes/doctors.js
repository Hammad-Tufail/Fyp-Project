var express = require('express');
const doctorController = require('../controllers/doctors.controllers');
const { verifyDoctor, verifyDoctorRefreshToken } = require('../middlewares/authentication');
const { profileFiles } = require('../middlewares/fileupload');
const { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } = require("../controllers/doctors.controllers.js");
const { reviewRouter } = require("./review.js");
var router = express.Router();

/* Module 1: Doctor Profiling */
router.post('/signup', profileFiles.fields([{ 'name': 'doctorPhoto' }]), doctorController.signup);
router.post('/signin', doctorController.signin);
router.put('/me', verifyDoctor, profileFiles.fields([{ 'name': 'doctorPhoto' }]), doctorController.updateMyProfile);
router.get('/me', verifyDoctor, doctorController.viewMyProfile);
router.get('/signout', verifyDoctorRefreshToken, doctorController.signout)
router.get('/refreshTokenCall', verifyDoctorRefreshToken, doctorController.refreshTokenCall);

module.exports = router;


////////////////////////////// I added/////////////////////////
// const router = express.Router()

// //////nested route/////////////
// router.use('/:doctorId/reviews', reviewRouter);

// router.get('/:id', getSingleDoctor);
// router.get('/', getAllDoctor);
// router.put('/:id', updateDoctor);
// router.delete('/:id', deleteDoctor);

// export default router;