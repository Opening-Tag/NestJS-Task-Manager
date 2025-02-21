import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./tasks.model";
import { User } from "./users/user.entity";
import { TaskLabel } from "./task-label.entity";

@Entity()
export class Task{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    title: string;

    @Column({
        type: 'text',
        nullable: false
    })
    description: string;

    @Column({
        type: 'enum',
        enum: TaskStatus,
        default: TaskStatus.OPEN
    })
    status: TaskStatus;

    @Column()
    userId: string

    @ManyToOne(()=> User, user => user.tasks, {nullable: false}) // many tasks belong to one user
    user: User;



    @OneToMany(() => TaskLabel, (label) => label.task, {
        cascade: true,
        orphanedRowAction: "delete"
    })
    labels: TaskLabel[];

}