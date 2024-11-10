import { connect } from "mongoose";

export async function connectMongo() {
  const mongoUri = process.env.MONGODB_URI;
  const localDB = process.env.MONGODB_LOCAL;
  console.log(localDB);
  if (!mongoUri && !localDB) {
    throw new Error(
      "No se ha encontrado la URI hacia la base de datos. Por favor, cominicate con tu administrador de sistemas.",
    );
  }

  try {
    await connect(mongoUri || process.env.MONGODB_LOCAL);
    console.log("¡Base de datos conectada!");
  } catch (error) {
    console.error("Error conectando con la base datos", error);
  }
}
