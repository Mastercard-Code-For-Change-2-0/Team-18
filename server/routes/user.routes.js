// <<<<<<< HEAD
// import express from "express";
// import { deleteUser, uploadStudentExcel, createUser, createAdmin, processLinkedInExcel } from "../controllers/user.controller.js";
// import authorizeRoles from "../middlewares/authorizeRoles.js";
// import multer from "multer";

import {Router} from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    updateAccountDetails,
    getCurrentUser,
    updateUserAvatar,
    updateUserCoverImage} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT} from "../middlewares/auth.middleware.js"
//>>>>>>> 02cf8b7b0024d4be512cc9b56113bc09b0275969



const router = Router()

router
.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: "1"
        },
        {
            name: "coverImage",
            maxCount: 2
        }
    ]),
    registerUser)

router
.route("/login").post(loginUser)
//secured routes


// Upload LinkedIn Excel file and process data
router.post("/upload-linkedin-excel", upload.single("file"), processLinkedInExcel);

export default router;