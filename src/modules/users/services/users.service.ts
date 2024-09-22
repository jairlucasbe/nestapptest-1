import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { v4 as uuid } from 'uuid';
import { ProfileRepository } from 'src/modules/profiles/repositories/profile.repository';
import { RolesRepository } from 'src/modules/roles/repositories/roles.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository : UserRepository,
    private readonly profilesRepository : ProfileRepository,
    private readonly rolesRepository : RolesRepository,
  ){}

  async create(createUserDto: CreateUserDto): Promise<User>{
    try {
      const profile = await this.profilesRepository.findById(createUserDto.profile_id);
      if (!profile) {
        throw new Error("Profile not found");
      }
      const rolesIds = createUserDto.roles;
      const roles = await this.rolesRepository.findByIds(rolesIds);
      const user = new User();
      user.id = uuid();
      user.name = createUserDto.name;
      user.email = createUserDto.email;
      user.password = createUserDto.password;
      user.profile = profile;
      user.roles = roles;
      return await this.usersRepository.save(user);
    } catch (error) {
      console.error(error)
    }
  }

  async findAll() {
    return this.usersRepository.findAll({
      relations: ['profile', 'profile.photos', 'roles'], // Aquí colocamos las relaciones
    });
  }

  findOne(id: number) {
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

}
