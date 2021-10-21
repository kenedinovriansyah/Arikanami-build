"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211020154611 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211020154611 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `tb_role` (`id` varchar not null, `created_at` datetime not null, `updated_at` datetime not null, `avatar` varchar null, `first_name` varchar not null, `last_name` varchar not null, `headline` varchar not null, `biograpy` varchar not null, `language` varchar not null, `website` varchar null, `twitter` varchar null, `facebook` varchar null, `youtube` varchar not null, `logged` integer not null default false, `show_course` integer not null default false, primary key (`id`));');
        this.addSql('alter table `tb_role` add column `user_id_id` varchar null;');
        this.addSql('create index `tb_role_user_id_id_index` on `tb_role` (`user_id_id`);');
        this.addSql('create unique index `tb_role_user_id_id_unique` on `tb_role` (`user_id_id`);');
    }
}
exports.Migration20211020154611 = Migration20211020154611;
