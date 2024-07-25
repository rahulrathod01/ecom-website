const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price, category, subcategory, images, deliveryLocation, deliveryRate, stock } = req.body;

  try {
    const newProduct = await Product.create({ name, description, price, category, subcategory, images, deliveryLocation, deliveryRate, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
