import Router from "express"
import { handleGetProducts, createProduct } from "../controllers/product.controller.js"

const routerProduct = Router()
const path = "/api/v1"

// get --> recibir datos del servidor
// post --> para enviarle información al servidor
routerProduct.get(`${path}/product/shampoo`, handleGetProducts)

routerProduct.post(`${path}/product`, createProduct)

export default routerProduct

// rest client