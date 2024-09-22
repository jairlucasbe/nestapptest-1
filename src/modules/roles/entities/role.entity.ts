import { Profile } from 'src/modules/profiles/entities/profile.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Profile)
    @JoinColumn({name: 'profile_id'})
    profile : Profile;

    @ManyToMany(() => User, (user) => user.roles)
    users : User[];

}