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
const user_1 = require("../../database/entities/user");
const connect_1 = require("../../setup/connect");
const typedi_1 = require("typedi");
const express_paginate_1 = __importDefault(require("express-paginate"));
let UserRepository = class UserRepository {
    constructor() { }
    async all(req) {
        const orm = await connect_1.connect();
        const repo = orm.em.getRepository(user_1.TBUser);
        const all = await repo.findAll({
            populate: ['role', 'accounts'],
        });
        const pageCount = Math.ceil((await repo.count()) / req.query.limit);
        return {
            status: 200,
            data: all,
            pageCount: pageCount,
            itemsCount: await repo.count(),
            pages: express_paginate_1.default.getArrayPages(req)(10, pageCount, req.query.limit),
        };
    }
    async detail(pk) {
        const orm = await connect_1.connect();
        const repo = orm.em.getRepository(user_1.TBUser);
        const one = await repo.findOne({ id: pk }, ['role', 'accounts']);
        return { status: 200, data: one };
    }
};
UserRepository = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], UserRepository);
exports.default = UserRepository;
