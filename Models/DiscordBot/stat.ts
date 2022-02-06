import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { DiscordServer } from "./discordServer";

export enum StatType {
    Skill,
    Adjective,
    Noun
}

@Entity()
export class Stat extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID!: number;

    @Column({ type: "enum", enum: StatType })
    statType!: StatType;

    @Column({ type: "tinytext" })
    word!: string;

    @ManyToMany(() => DiscordServer, server => server.stats)
    servers!: DiscordServer[];

}