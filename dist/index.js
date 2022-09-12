"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("./src/routes/route");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const error_1 = require("./src/middleware/error");
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb+srv://admin:admin123@cluster0.ndyjwui.mongodb.net/login').then(() => {
    console.log('Connect success!');
}).catch(e => {
    console.log(e);
});
app.use('', route_1.router);
app.use((0, cors_1.default)("*"));
app.use(error_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map