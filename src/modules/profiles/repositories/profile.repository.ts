import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async save(user: Profile): Promise<Profile> {
    return this.profileRepository.save(user);
  }

  async findById(id: string): Promise<Profile> {
    return this.profileRepository.findOneBy({ id: id });
  }
}