import { Entity, BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DiscordChannel } from "./discordChannel";
import { DiscordServer } from "./discordServer";

@Entity()
export class Quote extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    ID!: number;

    @Column()
    userID!: string;

    @Column({ type: "longtext" })
    content!: string;

    @Column()
    messageDate!: Date;

    @ManyToOne(() => DiscordServer, server => server.quotes)
    server!: DiscordServer;

    @ManyToOne(() => DiscordChannel, channel => channel.quotes)
    channel!: DiscordChannel;

}