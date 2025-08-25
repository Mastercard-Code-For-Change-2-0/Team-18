import express from "express";
import multer from "multer";
import { createAdmin, deleteAdmin } from "../controllers/admin.controller.js";
import { uploadExcel } from "../controllers/addExcel.controller.js";
//import authorizeRoles from "../middlewares/authorizeRoles.js";

const router = express.Router();

// Multer setup for memory storage (Excel upload)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a new admin
router.post("/", createAdmin);

// Delete an admin
router.delete("/:id", deleteAdmin);

// Upload students via Excel (only admin allowed)
router.post(
  "/upload-excel",
  upload.single("file"),
  uploadExcel
);

export default router;
