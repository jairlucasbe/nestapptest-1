import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RolesRepository } from '../repositories/roles.repository';
import { Role } from '../entities/role.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RolesService {

  constructor(
    private readonly roleRepository : RolesRepository
  ){}

  async create(createRoleDto: CreateRoleDto) {
    try {
      const role = new Role();
      role.id = uuid();
      role.name = createRoleDto.name;
      return await this.roleRepository.save(role);
    } catch (error) {
      console.error(error.message);
    }
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
