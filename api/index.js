// Importando o express
import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

// Criando o app
const app = express();

app.use(express.json());
// Evita conflitos quando está rodando localmente
app.use(cors());

app.use("/", userRoutes);

// Porta para execução
app.listen(8800);



