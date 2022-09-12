"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoute = void 0;
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controller/category-controller"));
const auth_1 = require("../middleware/auth");
exports.categoryRoute = (0, express_1.Router)();
exports.categoryRoute.use(auth_1.auth);
exports.categoryRoute.get('', category_controller_1.default.getAll);
exports.categoryRoute.post('', category_controller_1.default.addCategory);
exports.categoryRoute.delete('/:id', category_controller_1.default.deleteCategory);
exports.categoryRoute.get('/:id', category_controller_1.default.getCategory);
exports.categoryRoute.put('/:id', category_controller_1.default.updateCategory);
//# sourceMappingURL=category-route.js.map