import express from 'express'
import differentialControlers from '../controllers/differentialControlers.js'
import upload from '../config/multer.js'

const router = express.Router()


router.get('/differential', differentialControlers.reqDifferential)
router.post('/differential', upload.single("file"), differentialControlers.postDifferential)
router.delete('/differential/:id', differentialControlers.delDifferential)

export default router