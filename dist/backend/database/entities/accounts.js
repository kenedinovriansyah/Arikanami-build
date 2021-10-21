"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts = exports.Accounts = void 0;
const core_1 = require("@mikro-orm/core");
const base_1 = require("./base");
const user_1 = require("./user");
class Accounts extends base_1.Base {
}
exports.Accounts = Accounts;
exports.accounts = new core_1.EntitySchema({
    class: Accounts,
    name: 'tb_accounts',
    tableName: 'tb_accounts',
    extends: 'Accounts',
    properties: Object.assign(Object.assign({}, base_1.base), { instructor: { type: 'boolean', default: false }, promotions: { type: 'boolean', default: false }, announcements: { type: 'boolean', default: false }, promotional_email: { type: 'boolean', default: false }, active_message: { type: 'boolean', default: false }, userId: {
            reference: '1:1',
            entity: () => user_1.TBUser,
            mapToPk: true,
            nullable: false,
        } }),
});
