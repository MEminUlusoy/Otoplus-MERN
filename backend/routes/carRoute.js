import express from "express"
import * as carController from "../controllers/carController.js"

const router = express.Router()

router
    .route("/")
    .post(carController.createCar)
    .get(carController.getAllCars)

router
    .route("/:id")
    .get(carController.getACar)
    .put(carController.updateCar)
    .delete(carController.deleteCar)

export default router
