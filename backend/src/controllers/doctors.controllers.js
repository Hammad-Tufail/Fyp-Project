const cookiesOptions = require('../../config/cookiesConfig');
const { doctorServices } = require('../services/doctors.services');
const { dataResponse, messageResponse } = require('../utils/commonResponse');
const { multerFilesParser } = require("../utils/multerFilesParser");
const Doctor = require("../models/doctor.model");

/*Handlers for Doctor Role*/

async function signup(req, res, next) {
    try {
        console.log(req.body);
        const { email, password, name, specialization } = req.body;
        let doctorPhotoLink = await multerFilesParser.getSingleFileUrl("doctorPhoto", req.files)
        console.log(doctorPhotoLink)
        console.log(doctorPhotoLink)
        let signupRes = await doctorServices.signup(name, email, password, specialization, doctorPhotoLink);
        res.cookie("refreshToken", signupRes.refreshToken, cookiesOptions)
        return res.status(201).send(dataResponse("success", signupRes))
    }
    catch (error) {
        return next(error);
    }
}

async function signin(req, res, next) {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        let signinRes = await doctorServices.signin(email, password);

        res.cookie("refreshToken", signinRes.refreshToken, cookiesOptions)
        console.log(signinRes)
        return res.status(200).send(dataResponse("success", signinRes))
    }
    catch (error) {
        return next(error);
    }
}

async function viewMyProfile(req, res, next) {
    try {
        let doctorId = req.doctor.id;

        let doctor = await doctorServices.getDoctorProfile(doctorId);

        // const {password, ...rest} = doctor._doc;
        // const appointments = await Booking.find({doctor:doctorId})

        return res.send(dataResponse("success", { doctor }));


    }
    catch (error) {
        return next(error);
    }
}


async function refreshTokenCall(req, res, next) {
    try {
        let oldRefreshToken = req.signedCookies.refreshToken;
        let doctorId = req.doctor.id;

        let { token, doctor, refreshToken } = await doctorServices.refreshToken(doctorId, oldRefreshToken);

        res.cookie("refreshToken", refreshToken, cookiesOptions);
        console.log(doctor);
        return res.send(dataResponse("success", { token, doctor, refreshToken }));

    }
    catch (error) {
        return next(error);
    }
}

async function signout(req, res, next) {
    try {
        let oldRefreshToken = req.signedCookies.refreshToken;
        let doctorId = req.doctor.id;

        await doctorServices.signout(doctorId, oldRefreshToken);

        res.clearCookie("refreshToken");
        return res.status(200).send(dataResponse("success", "You've been logged out successfully."));
    }
    catch (error) {
        return next(error);
    }
}

async function addDoctor(req, res, next) {
    try {
        const { email, password, name } = req.body;

        let doctorPhotoLink = await multerFilesParser.getSingleFileUrl("doctorPhoto", req.files);

        let doctor = await doctorServices.addDoctor(name, email, password, doctorPhotoLink);

        return res.status(201).send(dataResponse("success", { doctor }))
    }
    catch (error) {
        return next(error);
    }
}

// async function deleteDoctor(req, res, next) {
//     try {
//         const doctorId = req.params.doctorId;
//         await doctorServices.deleteDoctor(doctorId);
//         return res.status(200).send(messageResponse("success", "Doctor has been deleted successfully"));
//     }
//     catch (error) {
//         return next(error);
//     }
// }

async function editDoctor(req, res, next) {
    try {
        let doctorId = req.params.doctorId;

        let { name, email } = req.body;

        let doctorPhotoLink = await multerFilesParser.getSingleFileUrl("doctorPhoto", req.files)

        let doctor = await doctorServices.editDoctor(doctorId, { name, email, doctorPhotoLink });

        return res.status(200).send(dataResponse("success", { doctor }));
    }
    catch (error) {
        return next(error);
    }
}

async function viewDoctors(req, res, next) {
    try {

        let { total, doctors } = await doctorServices.viewDoctors(mongooseQuery, limit, offset);
        return res.send(dataResponse("success", { total, doctors }));
    }
    catch (error) {
        return next(error);
    }
}

async function viewSpecificDoctor(req, res, next) {
    try {
        let doctorId = req.params.doctorId;

        let doctor = await doctorServices.getDoctorProfile(doctorId);

        return res.send(dataResponse("success", { doctor }));
    }
    catch (error) {
        return next(error);
    }
}

async function updateMyProfile(req, res, next) {
    try {
        let doctorId = req.doctor.id;

        let { name, email } = req.body;

        let doctorPhotoLink = await multerFilesParser.getSingleFileUrl("doctorPhoto", req.files)

        let doctor = await doctorServices.updateProfile(doctorId, name, email, doctorPhotoLink);

        return res.status(200).send(dataResponse("success", { doctor }));
    }
    catch (error) {
        return next(error);
    }
}

////////////////////////////////////I ADDED//////////////////////////////

async function getAllDoctor(req, res) {
    try {
        const { query } = req.query
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { specialization: { $regex: query, $options: 'i' } },

                ],
            }).select('-password');

        } else {
            doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');

        }
        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: doctors,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found" })
    }
}
async function getSingleDoctor(req, res, next) {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id).populate('reviews').select('-password');
        res.status(200).json({
            success: true,
            message: 'Doctor found',
            data: doctor,
        })
    }
    catch (err) {
        res.status(404).json({ success: false, message: 'No doctor found' })
    }
}
async function updateDoctor(req, res) {
    const id = req.params.id;
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true },
        )
        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully updated',
                data: updatedDoctor,
            });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" })
    }
}

async function deleteDoctor(req, res) {
    const id = req.params.id;
    try {
        await Doctor.findByIdAndDelete(id)
        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully deleted',

            });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" })
    }
}

module.exports = {
    signup, signin, viewMyProfile, refreshTokenCall, signout,

    addDoctor, deleteDoctor, viewSpecificDoctor, editDoctor, viewDoctors, updateMyProfile, getAllDoctor,
    updateDoctor, getSingleDoctor
}
