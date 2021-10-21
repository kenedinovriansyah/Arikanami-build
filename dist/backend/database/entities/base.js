"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = exports.Base = void 0;
const nanoid_1 = require("nanoid");
class Base {
}
exports.Base = Base;
exports.base = {
    id: { type: 'string', primary: true, onCreate: () => nanoid_1.nanoid() },
    created_at: { type: 'Date', onCreate: () => new Date(), hidden: true },
    updated_at: {
        type: 'Date',
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        hidden: true,
    },
};
