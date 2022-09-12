"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await product_1.Product.find().populate('category', 'name');
            res.status(200).json(products);
        };
        this.addProduct = async (req, res, next) => {
            try {
                let product = req.body;
                product = await product_1.Product.create(product);
                let newProduct = await product_1.Product.findById(product._id).populate('category', 'name');
                res.status(201).json(newProduct);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteProduct = async (req, res, next) => {
            let id = req.params.id;
            try {
                let product = await product_1.Product.findById(id);
                if (!product) {
                    res.status(404).json();
                }
                else {
                    product.delete();
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.getProduct = async (req, res, next) => {
            let id = req.params.id;
            try {
                let product = await product_1.Product.findById(id).populate('category', 'name');
                if (!product) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(product);
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.updateProduct = async (req, res) => {
            let id = req.params.id;
            let product = await product_1.Product.findById(id);
            if (!product) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await product_1.Product.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                product = await product_1.Product.findById(id).populate('category', 'name');
                res.status(200).json(product);
            }
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map