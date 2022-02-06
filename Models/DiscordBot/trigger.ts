import { Entity, BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DiscordServer } from "./discordServer";

@Entity()
export class Trigger extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID!: number;

    @Column()
    cause!: string;

    @Column()
    result!: string;

    @ManyToOne(() => DiscordServer, server => server.triggers)
    server!: DiscordServer;

}