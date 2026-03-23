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
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return 'Post request';
  }

  @Get('{/:id}')
  @ApiOperation({
    summary: 'Fetches list of users',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of pages you want the pagination to return',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: String,
    description:
      'The position of the page number that you want the API to return',
    required: false,
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  public getUsers(@Param() getUsersParamDto: GetUsersParamDto) {
    return this.usersService.findAll(getUsersParamDto, 10, 1);
  }

  @Patch('{/:id}')
  public patchUser(
    @Param() patchUserParamDto: GetUsersParamDto,
    @Body() patchUserDto: PatchUserDto,
  ) {
    return 'User Patched';
  }
}
