const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para usuarios
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registro de usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: usuario1
 *               email:
 *                 type: string
 *                 example: usuario1@mail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Error en los datos
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login de usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario1@mail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve token JWT
 *       400:
 *         description: Credenciales inválidas
 */
router.post('/login', login);

module.exports = router;
