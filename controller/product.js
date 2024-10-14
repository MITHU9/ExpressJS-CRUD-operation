const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

// CRUD-Operation-controller
//Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//Read all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

//Read a product
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

//Update a product
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

//Update a product
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

//Delete a product
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
