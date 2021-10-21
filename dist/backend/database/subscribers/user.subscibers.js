"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const user_1 = require("../entities/user");
const crypto_js_1 = __importDefault(require("crypto-js"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const __prod__1 = require("../../setup/__prod__");
var limit = 0;
var slimit = 0;
let UserSubsciber = class UserSubsciber {
    getSubscribedEntities() {
        return [user_1.TBUser];
    }
    async beforeCreate(args) {
        if (!limit) {
            if (__prod__1.env.test) {
                args.entity.password = crypto_js_1.default.AES.encrypt(args.entity.email, args.entity.password).toString();
            }
            else
                args.entity.password = bcrypt_1.default.hashSync(args.entity.password, 15);
        }
        limit++;
    }
    async beforeUpdate(args) {
        if (!slimit) {
            if (__prod__1.env.test) {
                args.entity.password = crypto_js_1.default.AES.encrypt(args.entity.email, args.entity.password).toString();
            }
            else
                args.entity.password = bcrypt_1.default.hashSync(args.entity.password, 15);
        }
        slimit++;
    }
    async onFlush(args) {
        const changeSet = args.uow.getChangeSets();
        const cs = changeSet.find((cs) => cs.type === core_1.ChangeSetType.CREATE && cs.entity instanceof user_1.TBUser);
        if (!changeSet[0]) {
        }
    }
    async onInit() { }
};
UserSubsciber = __decorate([
    core_1.Subscriber()
], UserSubsciber);
exports.default = UserSubsciber;
