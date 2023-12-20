import plans from "../models/plans.js";

class plansControlers {
  static async getPlans (req, res) {
    try {
      const getPlan = await plans.find({})
      res.status(200).json(getPlan)
    } catch (error) {
      res.status(500).send({ message: "Aqui está o Erro: " + error })
    }
  }

  static async postPlans (req, res) {
    try {
      const newPlans = await plans.create(req.body)
      res.status(200).json({ message: "Plan criado com sucesso!" })

    } catch (error) {
      res.status(500).send({ message: "Aqui está o Erro: " + error })
    }
  }

  static async delPlans (req, res) {
    try {
      const id = req.params.id
      await plans.findByIdAndDelete(id)
      res.status(200).json({ message: "Deletado com sucesso!" })
    } catch (error) {
      res.status(500).send({ message: "Erro ao tentar deletar um dos planos!" })
    }
  }
}

export default plansControlers