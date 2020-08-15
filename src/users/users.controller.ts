import { UserModel } from './shared/user.model';
import { UsersService } from './shared/users.service';
import { Controller, Get, Param, Body, Post, Put } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('UsersController')
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }

  @Get()
  getAll(): Promise<UserModel[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.getById(id);
  }

  @Post()
  async create(@Body() user: UserModel): Promise<UserModel> {
    return this.usersService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UserModel): Promise<UserModel> {
    return this.usersService.update(id, user);
  }

  // @Delete(':id')
  // async delete(@Param('id') id: string) {
  //   this.usersService.delete(id);
  // }
  
}
