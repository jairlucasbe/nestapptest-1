import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../entities/photo.entity';

@Injectable()
export class PhotoRepository {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async save(user: Photo): Promise<Photo> {
    return this.photoRepository.save(user);
  }

  async findById(id: string): Promise<Photo> {
    return this.photoRepository.findOneBy({ id: id });
  }

  async find(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
}