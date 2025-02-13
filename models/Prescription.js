import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    prescriptionID:{
        type: String,
        required: [true, 'prescriptionID is required']
    },
    date: {
        type: Date
    },
    appointmentId: {
        type: String,
        required: [true, 'appointmentID is required']
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

const prescription = mongoose.model("Appointment", prescriptionSchema);

export default prescription;