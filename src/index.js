import express from "express";
import "dotenv/config";
import filme from "./routers/filme.js";
const app = express();


app.use(express.json())
app.use("/filme", filme)






app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
})