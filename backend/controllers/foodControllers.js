import fs from "fs";
import foodModel from "../models/foodmodels.js";

// add food item

const addFood = async (req, res) => {
    let image_filename = `$(req.file.filename)`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success: true, message: "Food item added successfully"})
    }
    catch{
        console.log(err);
        res.json({success: false, message: "Failed to add food item"})
    }
}

export { addFood}