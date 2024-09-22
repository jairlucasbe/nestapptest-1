import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { User } from '../users/entities/user.entity';
import { ProfileRepository } from './repositories/profile.repository';
import { Photo } from '../photos/entities/photo.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Profile, User, Photo])],
  controllers: [ProfilesController],
  providers: [ProfilesService, ProfileRepository],
})
export class ProfilesModule {}
