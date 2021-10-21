"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211019011645 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211019011645 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `tb_user` (`id` varchar not null, `created_at` datetime not null, `updated_at` datetime not null, `email` varchar not null, `password` varchar not null, primary key (`id`));');
        this.addSql('create unique index `tb_user_email_unique` on `tb_user` (`email`);');
    }
}
exports.Migration20211019011645 = Migration20211019011645;
