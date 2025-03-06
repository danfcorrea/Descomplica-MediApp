import { mongoose } from "mongoose";
import Appointment from "./Appointment.js";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    date: {
        type: Date
    },
    appointmentId: {
        type: String,
        required: [true, 'appointmentID is required'],
        validate: {
            validator: function (v){
                const id = new mongoose.Types.ObjectId(v);
                return Appointment.exists({_id: id});
            },
            message: props => `AppointmentID ${props.value} not found.`
        }
    },
    medicine: {
        type: String,
        required: [true, 'Medicine is required']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required']
    },
    instructions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const prescription = mongoose.model("Prescription", prescriptionSchema);

export default prescription;