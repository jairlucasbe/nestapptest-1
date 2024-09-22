import { Profile } from 'src/modules/profiles/entities/profile.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Profile)
    @JoinColumn({name: 'profile_id'})
    profile : Profile;

    @ManyToMany(() => Role, (role) => role.users)
    @JoinTable({
        name : 'role_user',
        joinColumn : {
            name : 'user_id'
        },
        inverseJoinColumn : {
            name : 'role_id'
        },
    })
    roles : Role[];
}