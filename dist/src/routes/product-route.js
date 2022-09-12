"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product-controller"));
const auth_1 = require("../middleware/auth");
exports.productRoute = (0, express_1.Router)();
exports.productRoute.use(auth_1.auth);
exports.productRoute.get('', product_controller_1.default.getAll);
exports.productRoute.post('', product_controller_1.default.addProduct);
exports.productRoute.delete('/:id', product_controller_1.default.deleteProduct);
exports.productRoute.get('/:id', product_controller_1.default.getProduct);
exports.productRoute.put('/:id', product_controller_1.default.updateProduct);
//# sourceMappingURL=product-route.js.map