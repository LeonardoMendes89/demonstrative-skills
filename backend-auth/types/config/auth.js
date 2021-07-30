"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_js_1 = __importDefault(require("./knex.js"));
function authenticate() {
    var authUser = knex_js_1.default('auth')
        .select('*')
        .then(function (data) { return console.log(data); })
        .catch(function (err) { return console.log(err); });
}
exports.default = authenticate;
