import express from 'express'
import differential from './differentialRoute.js'
import plans from './plansRoute.js'

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Robust Accademy"))

  app.use(express.json(), differential, plans)
}

export default routes