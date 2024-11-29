import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://VANSH:Vansh%23147@cluster0.3anvn.mongodb.net/Food_Delivery')
        .then(() => console.log("DB Connected"))
};