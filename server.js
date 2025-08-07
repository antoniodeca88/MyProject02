require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const auth = require('./middleware/auth');

const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas públicas
app.use('/api/auth', authRoutes);

// Rutas protegidas
app.use('/api/products', auth, productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
