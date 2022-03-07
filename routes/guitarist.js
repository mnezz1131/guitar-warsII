import { Router } from 'express'
import * as controllers from '../controllers/guitarists.js'

const router = Router()

router.get('/', controllers.getRoot)
router.get('/guitarists', controllers.getGuitarists)
router.get('/guitarist/:id', controllers.getGuitarist)
router.post('/guitarists', controllers.createGuitarist)
router.put('/guitarists/:id', controllers.updateGuitarist)
router.delete('/guitarists/:id', controllers.deleteGuitarist)

export default router