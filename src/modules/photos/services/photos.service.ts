import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { UpdatePhotoDto } from '../dto/update-photo.dto';
import { PhotoRepository } from '../repositories/photo.repository';
import { ProfileRepository } from 'src/modules/profiles/repositories/profile.repository';
import { Photo } from '../entities/photo.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PhotosService {

  constructor(
    private readonly photoRepository: PhotoRepository,
    private readonly profileRepository: ProfileRepository
  ){}

  async create(createPhotoDto: CreatePhotoDto) {
    const profile = await this.profileRepository.findById(createPhotoDto.profile);
    if(!profile){
      throw new Error("No existe el perfil asociado")
    }
    const photo = new Photo();
    photo.id = uuid();
    photo.url = createPhotoDto.url;
    photo.profile = profile;
    return this.photoRepository.save(photo);
  }

  findAll() {
    return 'todos los registro';
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
