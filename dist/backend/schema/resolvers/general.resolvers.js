"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const general_query_1 = require("../query/general.query");
const country_json_1 = __importDefault(require("../prefix/country.json"));
let GeneralResolver = class GeneralResolver {
    constructor() { }
    async general() {
        return {
            name: 'Hello Worlds',
        };
    }
    async country() {
        return country_json_1.default;
    }
};
__decorate([
    type_graphql_1.Query(() => general_query_1.General),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeneralResolver.prototype, "general", null);
__decorate([
    type_graphql_1.Query(() => [general_query_1.Country]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeneralResolver.prototype, "country", null);
GeneralResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [])
], GeneralResolver);
exports.default = GeneralResolver;
