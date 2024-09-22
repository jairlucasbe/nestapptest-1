import { MigrationInterface, QueryRunner } from "typeorm";

export class Photos1727030030554 implements MigrationInterface {
    name = 'Photos1727030030554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`photos\` (\`id\` varchar(36) NOT NULL, \`url\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`profile_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`profile_id\` varchar(36) NULL, UNIQUE INDEX \`REL_23371445bd80cb3e413089551b\` (\`profile_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`profiles\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`profile_id\` varchar(36) NULL, UNIQUE INDEX \`REL_b3830cad76dd9efdb7e0afd629\` (\`profile_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_user\` (\`user_id\` varchar(36) NOT NULL, \`role_id\` varchar(36) NOT NULL, INDEX \`IDX_5261e26da61ccaf8aeda8bca8e\` (\`user_id\`), INDEX \`IDX_78ee37f2db349d230d502b1c7e\` (\`role_id\`), PRIMARY KEY (\`user_id\`, \`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`photos\` ADD CONSTRAINT \`FK_e647983b3b18bd1ad5f8d17ce9d\` FOREIGN KEY (\`profile_id\`) REFERENCES \`profiles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_23371445bd80cb3e413089551bf\` FOREIGN KEY (\`profile_id\`) REFERENCES \`profiles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`roles\` ADD CONSTRAINT \`FK_b3830cad76dd9efdb7e0afd629e\` FOREIGN KEY (\`profile_id\`) REFERENCES \`profiles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_user\` ADD CONSTRAINT \`FK_5261e26da61ccaf8aeda8bca8ea\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_user\` ADD CONSTRAINT \`FK_78ee37f2db349d230d502b1c7ea\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role_user\` DROP FOREIGN KEY \`FK_78ee37f2db349d230d502b1c7ea\``);
        await queryRunner.query(`ALTER TABLE \`role_user\` DROP FOREIGN KEY \`FK_5261e26da61ccaf8aeda8bca8ea\``);
        await queryRunner.query(`ALTER TABLE \`roles\` DROP FOREIGN KEY \`FK_b3830cad76dd9efdb7e0afd629e\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_23371445bd80cb3e413089551bf\``);
        await queryRunner.query(`ALTER TABLE \`photos\` DROP FOREIGN KEY \`FK_e647983b3b18bd1ad5f8d17ce9d\``);
        await queryRunner.query(`DROP INDEX \`IDX_78ee37f2db349d230d502b1c7e\` ON \`role_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_5261e26da61ccaf8aeda8bca8e\` ON \`role_user\``);
        await queryRunner.query(`DROP TABLE \`role_user\``);
        await queryRunner.query(`DROP INDEX \`REL_b3830cad76dd9efdb7e0afd629\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`profiles\``);
        await queryRunner.query(`DROP INDEX \`REL_23371445bd80cb3e413089551b\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`photos\``);
    }

}
