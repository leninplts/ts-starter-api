import { Router } from 'express'
// import * as paymentController from '../controllers/payment.controller'
const router = Router()

router.get('', (_req: any, res: any) => {
  res.send('main page payment route')
})

router.get('/test-order', (_req: any, res: any) => {
  res.send('test order route')
})
router.post('/test-order', (_req: any, res: any) => {
  res.send('post test order route')
})

export default router
