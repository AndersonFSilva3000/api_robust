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
      // const newDifferential = await differential.create(req.body)
      // res.status(201).json({ message: "Criado com sucesso !" })

      const { title, description, button } = req.body

      const file = req.file

      if (!file) {
        return res.status(400).json({ message: "Arquivo não recebido corretamente." });
      }

      const newDifferential = new differential({
        title,
        description,
        button,
        src: file.path
      })

      await newDifferential.save()
      res.json({newDifferential, msg: "Salvado com sucesso !"})
      
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