/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *
 *   post:
 *     summary: Crea un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado
 */
