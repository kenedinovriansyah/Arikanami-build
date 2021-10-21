"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("../config/mikro-orm.config"));
async function connect() {
    return core_1.MikroORM.init(mikro_orm_config_1.default);
}
exports.connect = connect;
