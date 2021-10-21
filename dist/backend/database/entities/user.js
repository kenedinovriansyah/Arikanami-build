"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.TBUser = void 0;
const core_1 = require("@mikro-orm/core");
const accounts_1 = require("./accounts");
const base_1 = require("./base");
const role_1 = require("./role");
class TBUser extends base_1.Base {
}
exports.TBUser = TBUser;
exports.user = new core_1.EntitySchema({
    class: TBUser,
    name: 'tb_user',
    tableName: 'tb_user',
    extends: 'TBUser',
    properties: Object.assign(Object.assign({}, base_1.base), { email: { type: 'string', unique: true, nullable: false, length: 225 }, password: { type: 'string', nullable: false, length: 225, hidden: true }, role: {
            reference: '1:1',
            entity: () => role_1.TBRole,
            mappedBy: (c) => c.userId,
        }, accounts: {
            reference: '1:1',
            entity: () => accounts_1.Accounts,
            mappedBy: (c) => c.userId,
        } }),
});
