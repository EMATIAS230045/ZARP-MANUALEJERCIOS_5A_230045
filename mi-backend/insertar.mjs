import mongoose from "mongoose";

// Conexión a MongoDB
const MONGO_URI = "mongodb+srv://230045:4lhgs5LtmKyByHvR@cluster0.otxog.mongodb.net/SesionesDB?retryWrites=true&w=majority&appName=Cluster0";

async function insertData() {
  try {
    // Conectar a la base de datos
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado a MongoDB");

    // Esquema con el campo 'couples' añadido
    const userSchema = new mongoose.Schema({
      id: { type: Number, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      couples: { type: String, required: true },  // Campo adicional 'couples'
    });

    // Crear el modelo para los datos
    const User = mongoose.model("User", userSchema);

    // Insertar los datos en la base de datos
    await User.insertMany([
      { id: 1, firstName: "John", lastName: "Doe", couples: "Yes" },
      { id: 2, firstName: "Jane", lastName: "Smith", couples: "No" },
      { id: 3, firstName: "Alice", lastName: "Johnson", couples: "Yes" },
    ]);

    console.log("✅ Datos insertados con éxito.");
  } catch (error) {
    console.error("❌ Error al insertar datos:", error);
  } finally {
    // Cerrar la conexión a la base de datos
    await mongoose.connection.close();
  }
}

// Llamada a la función para insertar los datos
insertData();
