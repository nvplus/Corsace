import { Entity, BaseEntity, PrimaryColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Counter } from "./counter";
import { DiscordChannel } from "./discordChannel";
import { Quote } from "./quote";
import { RoleAutomation } from "./roleAutomation";
import { Stat } from "./stat";
import { Trigger } from "./trigger";

@Entity()
export class DiscordServer extends BaseEntity {

    @PrimaryColumn()
    ID!: number;

    @Column({ type: "tinytext", default: "$" })
    prefix!: string;

    @Column({ default: true })
    daily!: boolean;

    @Column({ default: true })
    osuToggle!: boolean;
    
    @Column({ default: true })
    timestampToggle!: boolean;

    @Column({ default: false })
    autoVibe!: boolean;

    @Column({ default: false })
    allowAnyoneStats!: boolean;

    @Column()
    announceChannel!: number;

    @ManyToMany(() => Stat, stat => stat.servers)
    @JoinTable()
    stats!: Stat[];

    @OneToMany(() => DiscordChannel, channel => channel.server)
    channels!: DiscordChannel[];

    @OneToMany(() => Quote, quote => quote.server)
    quotes!: Quote[];

    @OneToMany(() => RoleAutomation, roleauto => roleauto.server)
    roleAutomations!: RoleAutomation[];

    @OneToMany(() => Trigger, trigger => trigger.server)
    triggers!: Trigger[];

    @OneToMany(() => Counter, counter => counter.server)
    counters!: Counter[];

}
