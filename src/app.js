import express from 'express'
import conectDataBase from './config/dbConect.js'
import routers from './routes/index.js'

const conexao = await conectDataBase()

conexao.on("error", (erro) => {
  console.error("Erro na conexão", erro);
})

conexao.once("open", () => {
  console.log("Conexão com o banco de dados realizada com sucesso!")
})

const app = express()
routers(app)

export default app