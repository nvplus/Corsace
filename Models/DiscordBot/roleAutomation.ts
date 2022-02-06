import { Entity, BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { DiscordRole } from "./discordRole";
import { DiscordServer } from "./discordServer";

@Entity()
export class RoleAutomation extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    ID!: number;

    @Column({ nullable: true })
    text!: string;

    @Column({ nullable: true })
    mention!: string;

    @ManyToMany(() => DiscordRole, role => role.roleAutomations)
    roles!: DiscordRole[];

    @ManyToOne(() => DiscordServer, server => server.roleAutomations)
    server!: DiscordServer;

}