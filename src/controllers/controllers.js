import { ProductSchema } from '../models/models';
import mongoose from 'mongoose';

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, Product) => {
    if (err) {
      return res.status(400).json(err).end();
    }
    res.status(200).json(Product);
  });
};

export const getProducts = (req, res) => {
  Product.find({}, (err, Product) => {
    if (err) {
      return res.status(400).end();
    }
    res.json(Product);
  });
};

export const getProductWithID = (req, res) => {
  Product.findById(req.params.ProductID, (err, Product) => {
    if (err) {
      return res.status(404).end();
    }
    res.json(Product);
  });
};
