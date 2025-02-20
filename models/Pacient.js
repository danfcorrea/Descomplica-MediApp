import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Pacient name is required']
    },
    birthDate:{
        type: Date
    },
    email:{
        type: String,
        required: [true, 'Email contact is required'],
        validate: {
            validator: function (v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} This is not a valid email value. Please use the following format validemail@example.com`
        }
    },
    phone:{
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function (v){
                return /\d{2} 9\d{4}-\d{4}/.test(v);
            },
            message: props => `${props.value} This is not a valid phone value. Please use the following format 99 91234-5678`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const pacient = mongoose.model("Appointment", pacientSchema);

export default pacient;