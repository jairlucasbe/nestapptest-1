import { Module } from '@nestjs/common';
import { RolesController } from './controllers/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { User } from '../users/entities/user.entity';
import { RolesService } from './services/roles.service';
import { RolesRepository } from './repositories/roles.repository';
import { UserRepository } from '../users/repositories/user.repository';

@Module({
  imports : [TypeOrmModule.forFeature([Role, User])],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository, UserRepository],
})
export class RolesModule {}
