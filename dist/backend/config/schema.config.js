"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const general_resolvers_1 = __importDefault(require("../schema/resolvers/general.resolvers"));
const type_graphql_1 = require("type-graphql");
exports.schema = type_graphql_1.buildSchema({
    resolvers: [general_resolvers_1.default],
    globalMiddlewares: [],
});
