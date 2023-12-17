import express from 'express'
import cors from 'cors'
import conectDataBase from './config/dbConect.js'
import routers from './routes/index.js'

const app = express()
app.use(cors());
app.use('/uploads', express.static('src/uploads'));

const conexao = await conectDataBase()

conexao.on("error", (erro) => {
  console.error("Erro na conexão", erro);
})

conexao.once("open", () => {
  console.log("Conexão com o banco de dados realizada com sucesso!")
})



routers(app)

export default app