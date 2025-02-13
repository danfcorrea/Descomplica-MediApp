import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    appointmentID:{
        type: String,
        required: [true, 'appointmentID is required']
    },
    date: {
        type: Date,
        required: [true, 'Appontment Date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'DoctorID is required']
    },
    pacientId: {
        type: String,
        required: [true, 'PacientID is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const appointment = mongoose.model("Appointment", appointmentSchema);

export default appointment;