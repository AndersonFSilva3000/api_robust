import express from "express";
import plansControlers from "../controllers/plansControlers.js";

const routes = express.Router()

routes.get('/plans', plansControlers.getPlans)
routes.post('/plans', plansControlers.postPlans)
routes.delete('/plans/:id', plansControlers.delPlans)

export default routes