import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

import router from ".././routes/allRoutes";

const app = express();

app.use(cors());

// swagger setup
const swaggerDefinition = {
  openapi: "3.0.1",
  info: {
    title: "Innohexit Team API (recruitment test)",
    version: "1.0.0",
    description: "API for Innohexit Team page (recruitment test)",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
    {
      url: "https://gravity-team-api.innohexit.in",
      description: "Production server",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./routes/*.ts"],
};
const options = {
  customCss:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
