import {MigrationInterface, QueryRunner} from "typeorm";

export class discordServerModels1644188471803 implements MigrationInterface {
    name = "discordServerModels1644188471803"

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`counter_track\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`UserID\` varchar(255) NOT NULL, \`count\` int NOT NULL DEFAULT '1', \`counterID\` int NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quote\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`userID\` varchar(255) NOT NULL, \`content\` longtext NOT NULL, \`messageDate\` datetime NOT NULL, \`serverID\` int NULL, \`channelID\` int NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`discord_channel\` (\`ID\` int NOT NULL, \`serverID\` int NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`discord_role\` (\`ID\` int NOT NULL, \`serverID\` int NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_automation\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`text\` varchar(255) NULL, \`mention\` varchar(255) NULL, \`serverID\` int NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stat\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`statType\` enum ('0', '1', '2') NOT NULL, \`word\` tinytext NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`trigger\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`cause\` varchar(255) NOT NULL, \`result\` varchar(255) NOT NULL, \`serverID\` int NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`discord_server\` (\`ID\` int NOT NULL, \`prefix\` tinytext NOT NULL DEFAULT '$', \`daily\` tinyint NOT NULL DEFAULT 1, \`osuToggle\` tinyint NOT NULL DEFAULT 1, \`timestampToggle\` tinyint NOT NULL DEFAULT 1, \`autoVibe\` tinyint NOT NULL DEFAULT 0, \`allowAnyoneStats\` tinyint NOT NULL DEFAULT 0, \`announceChannel\` int NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`counter\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`text\` varchar(255) NOT NULL, \`serverID\` int NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`discord_role_role_automations_role_automation\` (\`discordRoleID\` int NOT NULL, \`roleAutomationID\` int NOT NULL, INDEX \`IDX_7fa743fe28fa10b908ac3f74f8\` (\`discordRoleID\`), INDEX \`IDX_2e7be3016835cfe4597092f3a6\` (\`roleAutomationID\`), PRIMARY KEY (\`discordRoleID\`, \`roleAutomationID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`discord_server_stats_stat\` (\`discordServerID\` int NOT NULL, \`statID\` int NOT NULL, INDEX \`IDX_1fc49bc0d066c9936e3b1f95e5\` (\`discordServerID\`), INDEX \`IDX_99e9f3c621856c566ca6470bbb\` (\`statID\`), PRIMARY KEY (\`discordServerID\`, \`statID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`counter_track\` ADD CONSTRAINT \`FK_c7d4db6aa014c5bdd7842502538\` FOREIGN KEY (\`counterID\`) REFERENCES \`counter\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quote\` ADD CONSTRAINT \`FK_0ce5798d5271518e3aaff1f32e4\` FOREIGN KEY (\`serverID\`) REFERENCES \`discord_server\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quote\` ADD CONSTRAINT \`FK_eb16374e8f698141d4a545fa7e1\` FOREIGN KEY (\`channelID\`) REFERENCES \`discord_channel\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`discord_channel\` ADD CONSTRAINT \`FK_fe4512f29b6a088dd36d61cb9e0\` FOREIGN KEY (\`serverID\`) REFERENCES \`discord_server\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`discord_role\` ADD CONSTRAINT \`FK_909452d7b40cd3e1b9e13d7f91e\` FOREIGN KEY (\`serverID\`) REFERENCES \`discord_server\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_automation\` ADD CONSTRAINT \`FK_6bd83a0eff726a7f71e9ab751b4\` FOREIGN KEY (\`serverID\`) REFERENCES \`discord_server\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`trigger\` ADD CONSTRAINT \`FK_7b22c888c6b8ec63ad8169cdf20\` FOREIGN KEY (\`serverID\`) REFERENCES \`discord_server\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`counter\` ADD CONSTRAINT \`FK_8791e1bd33e2c2e576535585344\` FOREIGN KEY (\`serverID\`) REFERENCES \`discord_server\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`discord_role_role_automations_role_automation\` ADD CONSTRAINT \`FK_7fa743fe28fa10b908ac3f74f8f\` FOREIGN KEY (\`discordRoleID\`) REFERENCES \`discord_role\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`discord_role_role_automations_role_automation\` ADD CONSTRAINT \`FK_2e7be3016835cfe4597092f3a6d\` FOREIGN KEY (\`roleAutomationID\`) REFERENCES \`role_automation\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`discord_server_stats_stat\` ADD CONSTRAINT \`FK_1fc49bc0d066c9936e3b1f95e53\` FOREIGN KEY (\`discordServerID\`) REFERENCES \`discord_server\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`discord_server_stats_stat\` ADD CONSTRAINT \`FK_99e9f3c621856c566ca6470bbba\` FOREIGN KEY (\`statID\`) REFERENCES \`stat\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`discord_server_stats_stat\` DROP FOREIGN KEY \`FK_99e9f3c621856c566ca6470bbba\``);
        await queryRunner.query(`ALTER TABLE \`discord_server_stats_stat\` DROP FOREIGN KEY \`FK_1fc49bc0d066c9936e3b1f95e53\``);
        await queryRunner.query(`ALTER TABLE \`discord_role_role_automations_role_automation\` DROP FOREIGN KEY \`FK_2e7be3016835cfe4597092f3a6d\``);
        await queryRunner.query(`ALTER TABLE \`discord_role_role_automations_role_automation\` DROP FOREIGN KEY \`FK_7fa743fe28fa10b908ac3f74f8f\``);
        await queryRunner.query(`ALTER TABLE \`counter\` DROP FOREIGN KEY \`FK_8791e1bd33e2c2e576535585344\``);
        await queryRunner.query(`ALTER TABLE \`trigger\` DROP FOREIGN KEY \`FK_7b22c888c6b8ec63ad8169cdf20\``);
        await queryRunner.query(`ALTER TABLE \`role_automation\` DROP FOREIGN KEY \`FK_6bd83a0eff726a7f71e9ab751b4\``);
        await queryRunner.query(`ALTER TABLE \`discord_role\` DROP FOREIGN KEY \`FK_909452d7b40cd3e1b9e13d7f91e\``);
        await queryRunner.query(`ALTER TABLE \`discord_channel\` DROP FOREIGN KEY \`FK_fe4512f29b6a088dd36d61cb9e0\``);
        await queryRunner.query(`ALTER TABLE \`quote\` DROP FOREIGN KEY \`FK_eb16374e8f698141d4a545fa7e1\``);
        await queryRunner.query(`ALTER TABLE \`quote\` DROP FOREIGN KEY \`FK_0ce5798d5271518e3aaff1f32e4\``);
        await queryRunner.query(`ALTER TABLE \`counter_track\` DROP FOREIGN KEY \`FK_c7d4db6aa014c5bdd7842502538\``);
        await queryRunner.query(`DROP INDEX \`IDX_99e9f3c621856c566ca6470bbb\` ON \`discord_server_stats_stat\``);
        await queryRunner.query(`DROP INDEX \`IDX_1fc49bc0d066c9936e3b1f95e5\` ON \`discord_server_stats_stat\``);
        await queryRunner.query(`DROP TABLE \`discord_server_stats_stat\``);
        await queryRunner.query(`DROP INDEX \`IDX_2e7be3016835cfe4597092f3a6\` ON \`discord_role_role_automations_role_automation\``);
        await queryRunner.query(`DROP INDEX \`IDX_7fa743fe28fa10b908ac3f74f8\` ON \`discord_role_role_automations_role_automation\``);
        await queryRunner.query(`DROP TABLE \`discord_role_role_automations_role_automation\``);
        await queryRunner.query(`DROP TABLE \`counter\``);
        await queryRunner.query(`DROP TABLE \`discord_server\``);
        await queryRunner.query(`DROP TABLE \`trigger\``);
        await queryRunner.query(`DROP TABLE \`stat\``);
        await queryRunner.query(`DROP TABLE \`role_automation\``);
        await queryRunner.query(`DROP TABLE \`discord_role\``);
        await queryRunner.query(`DROP TABLE \`discord_channel\``);
        await queryRunner.query(`DROP TABLE \`quote\``);
        await queryRunner.query(`DROP TABLE \`counter_track\``);
    }

}
