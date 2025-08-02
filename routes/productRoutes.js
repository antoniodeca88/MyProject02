const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const productController = require('../controllers/productController');

// Validaciones 
const validateProduct = [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('category').notEmpty().withMessage('La categoría es obligatoria'),
  body('price').isFloat({ gt: 0 }).withMessage('El precio debe ser mayor a 0'),
  body('stock').optional().isInt({ min: 0 }).withMessage('El stock debe ser un número positivo'),
];

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', validateProduct, productController.createProduct);
router.put('/:id', validateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
