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
const connect_1 = require("../../setup/connect");
const typedi_1 = require("typedi");
const user_1 = require("../../database/entities/user");
const role_1 = require("../../database/entities/role");
const system_1 = require("../../setup/system");
const crypto_js_1 = __importDefault(require("crypto-js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mailer_1 = require("../../setup/mailer");
const __prod__1 = require("../../setup/__prod__");
const bcrypt_1 = __importDefault(require("bcrypt"));
const core_1 = require("@mikro-orm/core");
const accounts_1 = require("../../database/entities/accounts");
let UserService = class UserService {
    constructor() {
        this.results = null;
        this.messages = 'Profile has been updated';
    }
    async create(body) {
        const orm = await connect_1.connect();
        const repo = orm.em.create(user_1.TBUser, body);
        await orm.em.persistAndFlush(repo);
        const ac = orm.em.create(accounts_1.Accounts, { userId: repo.id });
        await orm.em.persistAndFlush(ac);
        system_1.writePath('../../tests/user.txt', JSON.stringify(repo));
        return { status: 201, message: 'Accounts has been created' };
    }
    async login(body) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(user_1.TBUser, { email: body.email });
        if (!(await this.checkPassword(repo, body, false)))
            return { status: 400, message: 'Inccorect email address or password' };
        return {
            status: 200,
            data: await jsonwebtoken_1.default.sign({ user: repo }, system_1.ticket, {
                algorithm: 'RS256',
            }),
        };
    }
    async reset(body) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(user_1.TBUser, { email: body.email });
        if (!repo)
            return { status: 400, message: 'Email address not found' };
        if (!__prod__1.env.test)
            await mailer_1.Mailer(repo.email, 'Reset Password', 'Next Password');
        return { status: 200, message: 'Accounts has been reset' };
    }
    async updatepwd(pk, body) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(user_1.TBUser, pk);
        if (!(await this.checkPassword(repo, body, true)))
            return { status: 400, message: 'Wrong password' };
        if (body.password !== body.confirmation)
            return {
                status: 400,
                message: "Password don't match, please check again",
            };
        core_1.wrap(repo).assign(body);
        await orm.em.flush();
        return { status: 200, message: 'Password has been updated' };
    }
    async update(pk, body) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(role_1.TBRole, { userId: pk });
        if (repo) {
            core_1.wrap(repo).assign(body);
            this.results = repo;
        }
        else
            this.results = await orm.em.create(role_1.TBRole, Object.assign({ userId: pk }, body));
        await orm.em.persistAndFlush(this.results);
        return { status: 200, message: this.messages, data: this.results };
    }
    async privacy(pk, body) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(role_1.TBRole, { userId: pk });
        if (repo) {
            core_1.wrap(repo).assign(body);
            this.results = repo;
        }
        else
            this.results = await orm.em.create(role_1.TBRole, Object.assign({ userId: pk }, body));
        await orm.em.persistAndFlush(this.results);
        return { status: 200, message: this.messages, data: this.results };
    }
    async avatar(pk, file) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(role_1.TBRole, { userId: pk });
        repo.avatar = file.path.split('serve/')[1];
        await orm.em.flush();
        return { status: 200, message: this.messages, data: repo };
    }
    async notification(pk, body) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(accounts_1.Accounts, { userId: pk });
        if (repo) {
            core_1.wrap(repo).assign(body);
            this.results = repo;
        }
        else
            this.results = await orm.em.create(accounts_1.Accounts, Object.assign({ userId: pk }, body));
        await orm.em.persistAndFlush(this.results);
        return { status: 200, message: this.messages, data: this.results };
    }
    async message(pk, body) {
        const orm = await connect_1.connect();
        const repo = await orm.em.findOne(accounts_1.Accounts, { userId: pk });
        if (repo) {
            core_1.wrap(repo).assign(body);
            this.results = repo;
        }
        else
            this.results = await orm.em.create(accounts_1.Accounts, Object.assign({ userId: pk }, body));
        await orm.em.persistAndFlush(this.results);
        return { status: 200, message: this.messages, data: this.results };
    }
    async checkPassword(find, body, verify) {
        if (__prod__1.env.test) {
            return crypto_js_1.default.AES.decrypt(find.password, body.password).toString(crypto_js_1.default.enc.Utf8);
        }
        else
            return bcrypt_1.default.compareSync(verify ? body.old : body.password, find.password);
    }
};
UserService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], UserService);
exports.default = UserService;
