import mongoose from 'mongoose';
const { Schema } = mongoose;

const detailSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    phone: {
        type: String,

    },
    message: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean
    }




});


const Detail = mongoose.model("Detail", detailSchema);

export default Detail