import { Entity, BaseEntity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { DiscordServer } from "./discordServer";
import { Quote } from "./quote";

@Entity()
export class DiscordChannel extends BaseEntity {

    @PrimaryColumn()
    ID!: number;

    @OneToMany(() => Quote, quote => quote.channel)
    quotes!: Quote[];

    @ManyToOne(() => DiscordServer, server => server.channels)
    server!: DiscordServer;

}
