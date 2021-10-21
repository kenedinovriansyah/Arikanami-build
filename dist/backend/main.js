"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const lightship_1 = require("lightship");
const __prod__1 = require("./setup/__prod__");
const logger_1 = require("./setup/logger");
const base_routing_1 = require("./base/base.routing");
const express_paginate_1 = require("express-paginate");
const connect_1 = require("./setup/connect");
const core_1 = require("@mikro-orm/core");
var bodyparser = require('body-parser');
var lig = lightship_1.createLightship();
class App extends base_routing_1.BaseRouting {
    constructor() {
        super();
        this.app = express_1.default();
        this.extensions();
        this.listen();
    }
    extensions() {
        this.app.use(cors_1.default());
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
        this.app.use(helmet_1.default({ contentSecurityPolicy: false }));
        this.app.use(morgan_1.default('common'));
        this.app.use(express_paginate_1.middleware(10, 20));
        this.app.use(async (req, res, next) => {
            const orm = await connect_1.connect();
            return core_1.RequestContext.create(orm.em, next);
        });
        this.controllers(this.app);
    }
    listen() {
        if (__prod__1.env.dev) {
            const serve = this.app
                .listen(__prod__1.env.port, () => {
                logger_1.logger.info(`application running on http://localhost:${__prod__1.env.port}`);
                lig.signalReady();
            })
                .on('error', (err) => {
                lig.shutdown();
                logger_1.loggerJSON.error(err);
            });
            lig.registerShutdownHandler(() => {
                serve.close();
            });
        }
        else
            this.app.listen();
    }
}
exports.app = new App();
