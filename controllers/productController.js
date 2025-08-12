const Product = require('../models/productModel');
const { validationResult } = require('express-validator');

// GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};

// GET one product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error al buscar el producto' });
  }
};

// POST create product
exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el producto' });
  }
};

// PUT update product
exports.updateProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar el producto' });
  }
};

// DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};
