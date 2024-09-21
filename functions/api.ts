import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import serverless from "serverless-http";

import router from "../routes/allRoutes";
import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const app = express();

app.use(cors());

// swagger setup
const swaggerDefinition = {
  openapi: "3.0.1",
  info: {
    title: "Gravity Team API (recruitment test)",
    version: "1.0.0",
    description: "API for Gravity Team page (recruitment test)",
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

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

app.use("/.netlify/functions/api", router);

const serverlessApp = serverless(app);

const handler = async (event: HandlerEvent, context: HandlerContext) => {
  const result = await serverlessApp(event, context);
  return result;
};

export { handler };
