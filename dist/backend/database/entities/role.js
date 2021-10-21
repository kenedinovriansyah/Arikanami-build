"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = exports.TBRole = void 0;
const core_1 = require("@mikro-orm/core");
const user_1 = require("./user");
const base_1 = require("./base");
class TBRole extends base_1.Base {
}
exports.TBRole = TBRole;
exports.role = new core_1.EntitySchema({
    class: TBRole,
    name: 'tb_role',
    tableName: 'tb_role',
    extends: 'TBRole',
    properties: Object.assign(Object.assign({}, base_1.base), { avatar: { type: 'string', nullable: true, length: 225 }, first_name: { type: 'string', nullable: true, length: 225 }, last_name: { type: 'string', nullable: true, length: 225 }, headline: { type: 'string', nullable: true, length: 225 }, biograpy: { type: 'string', nullable: true, length: 500 }, language: { type: 'string', nullable: true, length: 225 }, website: { type: 'string', nullable: true }, twitter: { type: 'string', nullable: true }, facebook: { type: 'string', nullable: true }, youtube: { type: 'string', nullable: false }, logged: { type: 'boolean', default: false }, show_course: { type: 'boolean', default: false }, userId: {
            reference: '1:1',
            entity: () => user_1.TBUser,
            mapToPk: true,
            nullable: false,
        } }),
});
