"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_base_1 = require("@mikro-orm/mysql-base");
const reflection_1 = require("@mikro-orm/reflection");
const sql_highlighter_1 = require("@mikro-orm/sql-highlighter");
const sqlite_1 = require("@mikro-orm/sqlite");
const user_subscibers_1 = __importDefault(require("../database/subscribers/user.subscibers"));
const logger_1 = require("../setup/logger");
const system_1 = require("../setup/system");
const __prod__1 = require("../setup/__prod__");
exports.default = {
    type: __prod__1.env.dbtype ? 'mysql' : 'sqlite',
    host: __prod__1.env.dbhost,
    port: parseInt(__prod__1.env.dbport),
    user: __prod__1.env.dbuser,
    password: __prod__1.env.dbpass,
    dbName: __prod__1.env.dbtype
        ? __prod__1.env.dbname
        : __prod__1.env.test
            ? system_1.joinPath('../database/db.test')
            : system_1.joinPath('../database/db.sqlite'),
    debug: true,
    getLogger: (message) => logger_1.logger.info(message),
    getDriver: __prod__1.env.dbtype ? mysql_base_1.MySqlDriver : sqlite_1.SqliteDriver,
    timezone: '+02:00',
    metadataProvider: reflection_1.TsMorphMetadataProvider,
    highlighter: new sql_highlighter_1.SqlHighlighter(),
    entitiesTs: [system_1.joinPath('../database/entities/*.ts')],
    subscribers: [new user_subscibers_1.default()],
    migrations: {
        tableName: 'migrations',
        path: __prod__1.env.dbtype
            ? system_1.joinPath('../database/mig_mysql')
            : system_1.joinPath('../database/mig_sqlite'),
        pattern: /^[\w-]+\d+\.ts$/,
        transactional: true,
        disableForeignKeys: true,
        allOrNothing: true,
        emit: 'ts',
    },
    discovery: {
        warnWhenNoEntities: false,
        requireEntitiesArray: false,
        alwaysAnalyseProperties: true,
    },
};
