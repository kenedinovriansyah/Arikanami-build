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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const user_1 = require("../../database/entities/user");
const typedi_1 = require("typedi");
const user_fields_1 = require("../fields/user.fields");
const user_repository_1 = __importDefault(require("../repository/user.repository"));
const user_service_1 = __importDefault(require("../service/user.service"));
const multer_1 = require("../../setup/multer");
let UserController = class UserController {
    constructor(service, repo) {
        this.service = service;
        this.repo = repo;
    }
    async login(body, res) {
        const r = await this.service.login(body);
        return res.status(r.status).json(r);
    }
    async create(body, res) {
        const r = await this.service.create(body);
        return res.status(r.status).json(r);
    }
    async reset(body, res) {
        const r = await this.service.reset(body);
        return res.status(r.status).json(r);
    }
    async all(req, res) {
        const r = await this.repo.all(req);
        return res.status(r.status).json(r);
    }
    async detail(req, res) {
        const r = await this.repo.detail(req.params.id);
        return res.status(r.status).json(r);
    }
    async me(user, res) {
        const r = await this.repo.detail(user.id);
        return res.status(r.status).json(r);
    }
    async password(user, body, res) {
        const r = await this.service.updatepwd(user.id, body);
        return res.status(r.status).json(r);
    }
    async updated_(user, body, res) {
        const r = await this.service.update(user.id, body);
        return res.status(r.status).json(r);
    }
    async privacy(user, body, res) {
        const r = await this.service.privacy(user.id, body);
        return res.status(r.status).json(r);
    }
    async avatar(user, file, res) {
        const r = await this.service.avatar(user.id, file);
        return res.status(r.status).json(r);
    }
    async notification(user, body, res) {
        const r = await this.service.notification(user.id, body);
        return res.status(r.status).json(r);
    }
    async message(user, body, res) {
        const r = await this.service.message(user.id, body);
        return res.status(r.status).json(r);
    }
};
__decorate([
    routing_controllers_1.Post('next/login'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Accounts get access log in',
        responses: { '400': { description: 'Bad Request' } },
    }),
    __param(0, routing_controllers_1.Body()),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_fields_1.LoginF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    routing_controllers_1.Post('next/create'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Create new a accounts',
        responses: { '400': { description: 'Bad Request' } },
    }),
    __param(0, routing_controllers_1.Body()),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_fields_1.RegisterF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    routing_controllers_1.Post('next/reset'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Reset accounts security',
        responses: { '400': { description: 'Bad Request' } },
    }),
    __param(0, routing_controllers_1.Body()),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_fields_1.ResetF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "reset", null);
__decorate([
    routing_controllers_1.Get(),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Get all accounts objects',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.Req()),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get(':id'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Get one accounts objects',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.Req()),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "detail", null);
__decorate([
    routing_controllers_1.Get('next/me'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Get one accounts objects',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.TBUser, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "me", null);
__decorate([
    routing_controllers_1.Post('next/password'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Update password',
        responses: { '400': { description: 'Bad Request' } },
    }),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.Body()),
    __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.TBUser,
        user_fields_1.PasswordF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "password", null);
__decorate([
    routing_controllers_1.Post('next/updated'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Update accounts objects',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.Body()),
    __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.TBUser,
        user_fields_1.UpdateF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updated_", null);
__decorate([
    routing_controllers_1.Post('next/privacy'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Update accounts privacy',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.Body()),
    __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.TBUser,
        user_fields_1.UpdatePrivacyF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "privacy", null);
__decorate([
    routing_controllers_1.Post('next/avatar'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Update avatar profile accounts objects',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.UploadedFile('file', {
        options: multer_1.fileUploadOptions(),
    })),
    __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.TBUser, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "avatar", null);
__decorate([
    routing_controllers_1.Post('next/notification'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Update notification settings accounts',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.Body()),
    __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.TBUser,
        user_fields_1.NotificationF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "notification", null);
__decorate([
    routing_controllers_1.Post('next/message'),
    routing_controllers_openapi_1.OpenAPI({
        description: 'Update message settings accounts',
        responses: { '400': { description: 'Bad Request' } },
    }),
    routing_controllers_1.Authorized(),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.Body()),
    __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.TBUser,
        user_fields_1.MessageF, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "message", null);
UserController = __decorate([
    routing_controllers_1.Controller('user/'),
    typedi_1.Service(),
    __metadata("design:paramtypes", [user_service_1.default, user_repository_1.default])
], UserController);
exports.default = UserController;
