import differential from "../models/differential.js";

class differentialControlers {

  static async reqDifferential ( req, res ) {
    try {
      const getDifferential = await differential.find({})
      res.status(200).json(getDifferential)
    } catch (error) {
      res.status(400).send({ message: 'Aqui está o erro'})
    }
  }

  static async postDifferential ( req, res ) {
    try {
      const newDifferential = await differential.create(req.body)
      res.status(201).json({ message: "Criado com sucesso !" })
    } catch (error) {
      res.status(500).send({ message: 'Aqui está o erro: ' + error})
    }
  }

  static async delDifferential ( req, res ) {
    try {
      const id = req.params.id
      await differential.findByIdAndDelete(id)
      res.status(200).json({ message: "Deletado com sucesso!" })
    } catch (error) {
      res.status(500).send({ message: "Erro ao tentar deletar um dos diferenciais!" })
    }
  }
}

export default differentialControlers