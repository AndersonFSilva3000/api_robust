import express from 'express'
import differentialControlers from '../controllers/differentialControlers.js'

const router = express.Router()

router.get('/differential', differentialControlers.reqDifferential)
router.post('/differential', differentialControlers.postDifferential)
router.delete('/differential/:id', differentialControlers.delDifferential)

export default router