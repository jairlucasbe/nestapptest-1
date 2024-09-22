import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileRepository } from './repositories/profile.repository';
import { v4 as uuid } from 'uuid';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly profileRepository: ProfileRepository){}
  
  async create(createProfileDto: CreateProfileDto): Promise<Profile>{
    try {
      const profile = new Profile();
      profile.id = uuid();
      profile.name = createProfileDto.name;
      profile.lastname = createProfileDto.lastname;
      return await this.profileRepository.save(profile);
    } catch (error) {
      console.error(error.message);
    }
  }

  findOne(id: string) {
    return this.profileRepository.findById(id);
  }

  findAll() {
    return `This action returns all profiles`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
