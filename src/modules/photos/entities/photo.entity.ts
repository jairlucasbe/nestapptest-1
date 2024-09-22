import { Profile } from "src/modules/profiles/entities/profile.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('photos')
export class Photo {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    url :string;
    
    @ManyToOne(() => Profile, (profile) => profile.photos)
    @JoinColumn({name : 'profile_id'})
    profile: Profile

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    update_at : Date
}
