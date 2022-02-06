import { Entity, BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Counter } from "./counter";

@Entity()
export class CounterTrack extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID!: number;

    @Column()
    UserID!: string;

    @Column({ default: 1 })
    count!: number;

    @ManyToOne(() => Counter, counter => counter.tracks)
    counter!: Counter;

}