import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import { Ride } from "./Ride";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @OneToMany((type) => Ride, ride=> ride.user)
        @JoinColumn({ referencedColumnName: 'user_id' })
        rides: Ride[];
}
