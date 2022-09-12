"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            let categories = await category_1.Category.find();
            res.status(200).json(categories);
        };
        this.addCategory = async (req, res, next) => {
            try {
                let category = req.body;
                category = await category_1.Category.create(category);
                res.status(201).json(category);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteCategory = async (req, res, next) => {
            let id = req.params.id;
            try {
                let category = await category_1.Category.findById(id);
                if (!category) {
                    res.status(404).json();
                }
                else {
                    category.delete();
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.getCategory = async (req, res, next) => {
            let id = req.params.id;
            try {
                let category = await category_1.Category.findById(id);
                if (!category) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(category);
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.updateCategory = async (req, res) => {
            let id = req.params.id;
            let category = await category_1.Category.findById(id);
            if (!category) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await category_1.Category.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                res.status(200).json(data);
            }
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map