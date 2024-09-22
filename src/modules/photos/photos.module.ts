import { Module } from '@nestjs/common';
import { PhotosService } from './services/photos.service';
import { PhotosController } from './controllers/photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { Profile } from '../profiles/entities/profile.entity';
import { PhotoRepository } from './repositories/photo.repository';
import { ProfileRepository } from '../profiles/repositories/profile.repository';

@Module({
  imports : [TypeOrmModule.forFeature([Photo, Profile])],
  controllers: [PhotosController],
  providers: [PhotosService, PhotoRepository, ProfileRepository],
})
export class PhotosModule {}
