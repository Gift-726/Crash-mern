import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProduct = async(req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.error("Error in fetching products: ", error.message);
        res.status(500).json({ success: false, "Message": "Server Error" })
    }

};
export const createProduct = async(req, res) => {

    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, "Message": "Please fill all empty fields" });

    }
    
    const newProduct = new Product(product);
    try {
        
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.error("Error in create Product: ", error.message);
        res.status(500).json({ success: false, "Message": "Server Error" })
    }

};

export const deleteProduct = async (req, res) => { 
    const { id } = req.params;
    console.log("Id: ", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, "Message": "Invalid product Id" });

    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: "True", message: "product Deleted"})
    } catch (error) {
        console.log("Error in Deleting Product:", error.message );
        res.status(500).json({success: "False", message: "Server Error"})
    }
 };
export const updateProduct = async(req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, "Message": "Invalid product Id" });

    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true});
        res.status(201).json({ success: true, data: updatedProduct })
    } catch (error) {
        console.error("Error in create Product: ", error.message);
        res.status(500).json({ success: false, "Message": "Server Error" })
    }

};
