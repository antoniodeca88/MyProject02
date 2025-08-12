const express = require('express');
const { body } = require('express-validator');
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API para productos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Producto creado
 *       400:
 *         description: Error en los datos
 */
router.post('/', auth, [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('price').isNumeric().withMessage('El precio debe ser un número'),
  body('category').notEmpty().withMessage('La categoría es obligatoria')
], productController.createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualiza un producto por ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       400:
 *         description: Error en los datos
 *       404:
 *         description: Producto no encontrado
 */
router.put('/:id', auth, [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('price').isNumeric().withMessage('El precio debe ser un número'),
  body('category').notEmpty().withMessage('La categoría es obligatoria')
], productController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
