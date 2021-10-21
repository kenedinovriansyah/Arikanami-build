"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGraphql = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schema_config_1 = require("../config/schema.config");
const __prod__1 = require("../setup/__prod__");
class BaseGraphql {
    constructor() { }
    async middleware() {
        const apollo = new apollo_server_express_1.ApolloServer({
            schema: await schema_config_1.schema,
            context: ({ req, res }) => {
                return { req, res };
            },
            playground: __prod__1.env.dev ? true : false,
            introspection: true,
        });
        return apollo;
    }
}
exports.BaseGraphql = BaseGraphql;
