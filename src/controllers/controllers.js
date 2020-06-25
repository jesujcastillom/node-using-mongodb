import { ProductSchema } from "../models/models";
import mongoose from "mongoose";

const Product = mongoose.model("Product", ProductSchema);

export const addnewProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, Product) => {
    if (err) {
      res.status(400).json(err).end();
      return;
    }
    res.status(200).json(Product);
  });
};
