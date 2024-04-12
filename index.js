"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./db/connection"));
const app = (0, express_1.default)();
const port = 8800;
(0, connection_1.default)();
app.get('/', (req, res) => {
    res.json({ message: 'Hello TypeScript Express Server!' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
