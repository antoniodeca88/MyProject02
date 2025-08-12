const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'El nombre es obligatorio'] },
  description: { type: String },
  category: { type: String, required: [true, 'La categoría es obligatoria'] },
  price: { type: Number, required: [true, 'El precio es obligatorio'], min: 0 },
  stock: { type: Number, default: 0, min: 0 },
  available: { type: Boolean, default: true },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
