import { Router } from 'express'
// import paymentRoutes from './paypal.routes'
import testRoutes from './test.routes'

const router = Router()

router.use('/test', testRoutes)

export default router
