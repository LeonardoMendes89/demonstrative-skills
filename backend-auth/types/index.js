"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var port = 3004;
var auth_js_1 = __importDefault(require("./config/auth.js"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default({ origin: '*' }));
app.get('/auth', function (req, res) {
    return res.json(auth_js_1.default());
});
app.listen(port, function () {
    var msg = "online into port :" + port;
    console.log(msg);
    console.log(auth_js_1.default());
});
