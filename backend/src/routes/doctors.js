var express = require('express');
const doctorController = require('../controllers/doctors.controllers');
const { verifyDoctor, verifyDoctorRefreshToken } = require('../middlewares/authentication');
const { profileFiles } = require('../middlewares/fileupload');
var router = express.Router();

/* Module 1: Doctor Profiling */
router.post('/signup', profileFiles.fields([{ 'name': 'doctorPhoto' }]), doctorController.signup);
router.post('/signin', doctorController.signin);
router.put('/me', verifyDoctor, profileFiles.fields([{ 'name': 'doctorPhoto' }]), doctorController.updateMyProfile);
router.get('/me', verifyDoctor, doctorController.viewMyProfile);
router.get('/signout', verifyDoctorRefreshToken, doctorController.signout)
router.get('/refreshTokenCall', verifyDoctorRefreshToken, doctorController.refreshTokenCall);

module.exports = router;