import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Para parsear JSON en las solicitudes

const MONGO_URI =
  "mongodb+srv://230045:4lhgs5LtmKyByHvR@cluster0.otxog.mongodb.net/SesionesDB?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// Esquema y modelo en MongoDB
const userSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
});
const User = mongoose.model("User", userSchema);

// 🚀 Ruta para obtener los datos
app.get("/api/data", async (req, res) => {
  try {
    const users = await User.find(); // Obtener todos los usuarios de la base de datos
    res.json({
      recordsTotal: users.length,
      recordsFiltered: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
