import mongoose from "mongoose";

const uri = "mongodb+srv://emanuelarango1226:hq3qvUK2jIkcDHys@camilo.o5sao.mongodb.net/?retryWrites=true&w=majority&appName=camilo";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connection() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("¡Conexión exitosa a MongoDB!");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    throw error; 
  }
}

export default connection; 
