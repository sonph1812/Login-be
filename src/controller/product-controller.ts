import {NextFunction, Request, Response} from "express";
import {Product} from "../model/product";

class ProductController {
    getAll = async (req: Request, res: Response) => {
        let products = await Product.find().populate('category', 'name');
        res.status(200).json(products);
    }

    addProduct = async (req: Request, res: Response, next: NextFunction) => {
       try {
           let product = req.body;
           product = await Product.create(product);
           let newProduct = await Product.findById(product._id).populate('category', 'name');
           res.status(201).json(newProduct);
       }catch (error){
           next(error);
       }
    }

    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let product = await Product.findById(id);
            if (!product) {
                res.status(404).json();
            } else {
                product.delete();
                res.status(204).json();
            }
        } catch (error) {
            next(error);
        }
    }

    getProduct = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let product = await Product.findById(id).populate('category', 'name');
            if (!product) {
                res.status(404).json();
            } else {
                res.status(200).json(product);
            }
        } catch (error) {
            next(error)
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        let product = await Product.findById(id);
        if (!product) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Product.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            product = await Product.findById(id).populate('category','name');
            res.status(200).json(product);
        }
    }
}

export default new ProductController();
