"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
// Alloting Port Number
const port = process.env.PORT || 5000;
// Creating the server
const server = http_1.default.createServer(app_1.default);
// Listening on the required Port.
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
