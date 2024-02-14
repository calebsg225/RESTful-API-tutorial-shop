import mongoose from "mongoose";
const { model, Schema } = mongoose;

const productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
});

export const Product = model("Product", productSchema, "products");