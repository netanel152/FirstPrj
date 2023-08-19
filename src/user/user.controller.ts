import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  @Post()
  async addUser(@Body() user: UserDTO): Promise<UserDTO> {
    return user;
  }
}
