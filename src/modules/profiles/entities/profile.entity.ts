import { Photo } from 'src/modules/photos/entities/photo.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from 'typeorm';
@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({name: 'last_name'})
    lastname: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Photo, (photo) => photo.profile)
    photos: Photo[];

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User, (user) => user.profile)
    user : User;
}