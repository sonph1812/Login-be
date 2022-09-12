import {Router} from "express";
import productController from "../controller/product-controller";
import {auth} from "../middleware/auth";

export const productRoute = Router();
productRoute.use(auth);
productRoute.get('', productController.getAll);
productRoute.post('', productController.addProduct)
productRoute.delete('/:id', productController.deleteProduct)
productRoute.get('/:id', productController.getProduct)
productRoute.put('/:id', productController.updateProduct)
