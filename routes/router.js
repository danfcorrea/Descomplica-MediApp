import express from "express"
import appointmentController from "./AppointmentController.js"
import doctorController from "./DoctorController.js"
import pacientController from "./PacientController.js"
import prescriptionController from "./PrescriptionController.js"
import doctorService from "../services/DoctorService.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import verifyToken from "../middleware/authMiddleware.js"

const router = express.Router();

router.get(
    "/", function (req, res){
        res.status(200).json({message: "hi"});
    }
);

router.post(
    '/login', async (req, res) => {
        try {
            const {login, password} = req.body;
            const doctor = await doctorService.getDoctorByLogin(login);
            if(!doctor){
                return res.status(401).json({error: 'Autentication failed!'})
            }
            const passwordMatch = await bcrypt.compare(password, doctor.password);
            if(!passwordMatch){
                return res.status(401).json({error: 'Autentication failed!'})
            }
            const token = jwt.sign({doctorId: doctor._id}, 'your-secret-key', {
                expiresIn: '1h'
            })
            res.status(200).json({token})
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Login failed!'})
        }
    }
)

router.use("/", verifyToken, appointmentController);
router.use("/", verifyToken, doctorController);
router.use("/", verifyToken, pacientController);
router.use("/", verifyToken, prescriptionController);

export default router