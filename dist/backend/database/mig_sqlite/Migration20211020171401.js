"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211020171401 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211020171401 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `tb_accounts` (`id` varchar not null, `created_at` datetime not null, `updated_at` datetime not null, `instructor` integer not null default false, `promotions` integer not null default false, `announcements` integer not null default false, `promotional_email` integer not null default false, `active_message` integer not null default false, primary key (`id`));');
        this.addSql('alter table `tb_accounts` add column `user_id_id` varchar null;');
        this.addSql('create index `tb_accounts_user_id_id_index` on `tb_accounts` (`user_id_id`);');
        this.addSql('create unique index `tb_accounts_user_id_id_unique` on `tb_accounts` (`user_id_id`);');
    }
}
exports.Migration20211020171401 = Migration20211020171401;
