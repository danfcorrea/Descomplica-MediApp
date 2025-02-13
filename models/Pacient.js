import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
    pacientId: {
        type: String,
        required: [true, 'PacientID is required']
    },
    name:{
        type: String,
        required: [true, 'Pacient name is required']
    },
    birthDate:{
        type: Date
    },
    email:{
        type: String,
        required: [true, 'Email contact is required']
    },
    phone:{
        type: String,
        required: [true, 'Phone number is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const pacient = mongoose.model("Appointment", pacientSchema);

export default pacient;