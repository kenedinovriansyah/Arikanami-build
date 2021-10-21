"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouting = void 0;
const routing_controllers_1 = require("routing-controllers");
const system_1 = require("../setup/system");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typedi_1 = __importDefault(require("typedi"));
const base_graphql_1 = require("./base.graphql");
var listsRoutes = require('express-list-routes');
routing_controllers_1.useContainer(typedi_1.default);
class BaseRouting extends base_graphql_1.BaseGraphql {
    constructor() {
        super();
    }
    async controllers(app) {
        routing_controllers_1.useExpressServer(app, {
            routePrefix: '/api/v1/',
            controllers: [system_1.joinPath('../app/controllers/*.controllers.ts')],
            middlewares: [],
            interceptors: [],
            cors: [],
            authorizationChecker: async function (ac, roles) {
                const token = ac.request.headers['authorization'].split('Bearer ')[1];
                return Boolean(token);
            },
            currentUserChecker: async function (ac) {
                const token = ac.request.headers['authorization'].split('Bearer ')[1];
                if (token)
                    return await jsonwebtoken_1.default.decode(token)['user'];
            },
        });
        listsRoutes(app);
        const apollo = await this.middleware();
        apollo.applyMiddleware({ app, path: '/graphql' });
    }
}
exports.BaseRouting = BaseRouting;
