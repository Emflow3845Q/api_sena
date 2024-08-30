import mongoose from "mongoose";

const uri =
  "mongodb+srv://CamiloUsuga:Dostoyevski1409@xxi.w76nt.mongodb.net/db_sena?retryWrites=true&w=majority&appName=XXI";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Conectarse a MongoDB
    await mongoose.connect(uri, clientOptions);

    // Validar la conexión
    const isConnected = mongoose.connection.readyState === 1; // 1 significa "conectado"

    if (isConnected) {
      console.log("¡Conexión exitosa a MongoDB!");
    } else {
      console.error("No se pudo conectar a MongoDB.");
    }
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  } finally {
    // Asegurarse de cerrar la conexión
    await mongoose.disconnect();
  }
}

export default run;
