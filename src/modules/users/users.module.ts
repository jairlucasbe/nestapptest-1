import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { Profile } from '../profiles/entities/profile.entity';
import { ProfileRepository } from '../profiles/repositories/profile.repository';
import { Role } from '../roles/entities/role.entity';
import { RolesRepository } from '../roles/repositories/roles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Role])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository, ProfileRepository, RolesRepository],
})
export class UsersModule {}
