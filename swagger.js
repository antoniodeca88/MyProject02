const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mi API de Productos y Usuarios",
      version: "1.0.0",
      description: "Documentación con Swagger para mi API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Aquí van las rutas donde tengas tus endpoints documentados
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
