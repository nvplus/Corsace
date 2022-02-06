import { Entity, BaseEntity, PrimaryColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { DiscordServer } from "./discordServer";
import { RoleAutomation } from "./roleAutomation";

@Entity()
export class DiscordRole extends BaseEntity {

    @PrimaryColumn()
    ID!: number;

    @ManyToMany(() => RoleAutomation, roleauto => roleauto.roles)
    @JoinTable()
    roleAutomations!: RoleAutomation[];

    @ManyToOne(() => DiscordServer, server => server.channels)
    server!: DiscordServer;

}
