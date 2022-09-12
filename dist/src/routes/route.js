"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_route_1 = require("./product-route");
const auth_route_1 = require("./auth-route");
const category_route_1 = require("./category-route");
exports.router = (0, express_1.Router)();
exports.router.use('/products', product_route_1.productRoute);
exports.router.use('/categories', category_route_1.categoryRoute);
exports.router.use('', auth_route_1.authRoute);
//# sourceMappingURL=route.js.map