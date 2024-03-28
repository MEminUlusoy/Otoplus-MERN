import mongoose from "mongoose";

const {Schema} = mongoose

const carSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    modelYear: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    gear: {
        type: String,
        required: true
    },
    km: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},{

    timestamps: true

})


const Car = mongoose.model("Car", carSchema)

export default Car