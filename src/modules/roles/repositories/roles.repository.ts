import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Role } from '../entities/role.entity';

@Injectable()
export class RolesRepository {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async save(user: Role): Promise<Role> {
    return this.roleRepository.save(user);
  }

  async findAll(options?: any): Promise<Role[]> {
    return this.roleRepository.find(options);
  }

  async findByIds(ids: string[]): Promise<Role[]> {
    return this.roleRepository.find({
      where: {
        id: In(ids),
      },
    });
  }
}
