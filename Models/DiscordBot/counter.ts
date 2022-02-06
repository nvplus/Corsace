import { Entity, BaseEntity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CounterTrack } from "./counterTrack";
import { DiscordServer } from "./discordServer";

@Entity()
export class Counter extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID!: number;

    @Column()
    text!: string;

    @OneToMany(() => CounterTrack, counterTrack => counterTrack.counter)
    tracks!: CounterTrack[];

    @ManyToOne(() => DiscordServer, server => server.counters)
    server!: DiscordServer;

}