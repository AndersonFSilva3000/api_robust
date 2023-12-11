import express from 'express'
import differential from './differentialRoute.js'

const routers = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Robust Accademy"))

  app.use(express.json(), differential)
}

export default routers