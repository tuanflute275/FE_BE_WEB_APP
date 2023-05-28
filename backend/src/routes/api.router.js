import express from 'express'
const router = express.Router()
import homeController from '../controllers/home.controller';
import apiController from '../controllers/api.controller';

let initApiRouter = (app) => {
    // web
    router.get('/product', homeController.getHomePage)
    router.get('/create', homeController.createNewProduct)

    // api
    router.get('/get-product', apiController.getAllProduct)
    router.post('/create-new-product', apiController.createNewProduct)
    router.put('/update-product/:id', apiController.updateProduct)
    router.delete('/delete-product/:id', apiController.deleteProduct)

    return app.use('/api', router)
}

export default initApiRouter