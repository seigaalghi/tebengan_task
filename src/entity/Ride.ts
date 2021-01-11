import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity()
export class Ride {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    from_city_name: string;

    @Column()
    to_city_name: string;

    @Column()
    user_id: string;

    @ManyToOne((type)=> User, user => user.rides)
    @JoinColumn({name: "user_id"})
    user : User;
    
    
}
