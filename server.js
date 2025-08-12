require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const auth = require('./middleware/auth');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// Cargar documento Swagger
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas de la API
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', auth, productRoutes); // Protegido con JWT

// Ruta de prueba
app.get('/test', (req, res) => {
  res.send('Servidor activo');
});

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
  console.log(`📄 Documentación Swagger: http://localhost:${PORT}/api-docs`);
});
