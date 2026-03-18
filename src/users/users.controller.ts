import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user-dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {}


  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return 'Post request';
  }

  @Get('{/:id}')
  public getUsers(@Param() getUsersParamDto: GetUsersParamDto) {
    

    return this.usersService.findAll(getUsersParamDto, 10, 1)
  }

  @Patch('{/:id}')
  public patchUser(
    @Param() patchUserParamDto: GetUsersParamDto,
    @Body() patchUserDto: PatchUserDto,
  ) {
    return 'User Patched';
  }
}
