import Car from "../models/carModel.js"

const createCar = async (req,res) => {
    try {
        const car = await Car.create(req.body)
        res.status(201).json({
            succeded: true,
            car
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
        
    }
}


const getAllCars = async (req,res) => {
    try {
        const cars = await Car.find({})
        res.status(200).json({
            succeded: true,
            count: cars.length,
            data: cars
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }

}



const getACar = async (req,res) => {
    try {
        const car = await Car.findById({_id: req.params.id})
        res.status(200).json({
            succeded: true,
            car
        })
    } catch (error) {
        req.status(500).json({
            succeded: false,
            error
        })
    }
}

const updateCar = async (req,res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate({_id: req.params.id}, req.body)

        if(!updatedCar){
            return res.status(404).json({ message: "Car Not Found" })
        }

        res.status(200).json({
            succeded: true,
            message: "Car Updated Successfully"
        })

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}


const deleteCar = async (req,res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete({_id: req.params.id})

        if(!deletedCar){
            return res.status(404).json({ message: "Car not found" })
        }

        res.status(200).json({
            succeded: true,
            message: "Car is deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })   
    }
}

export {createCar, getAllCars, getACar, updateCar, deleteCar}