import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { fillDTO } from '@project/shared/helpers';
import { UserRDO } from './rdo/user.rdo';
import { LoginUserDTO } from './dto/login-user.dto';
import { LoggedUserRDO } from './rdo/logged-user.rdo';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  public async create(
    @Body()
    dto: CreateUserDTO
  ): Promise<UserRDO> {
    const user = await this.authService.register(dto);
    return fillDTO(UserRDO, user.toPOJO())
  }

  @Post('login')
  public async login(
    @Body()
    dto: LoginUserDTO
  ): Promise<LoggedUserRDO> {
    const verifyUser = await this.authService.verifyUser(dto);
    return fillDTO(LoggedUserRDO, verifyUser.toPOJO());
  }

  @Get(':id')
  public async show(@Param('id') id: string): Promise<UserRDO> {
    const existUser = await this.authService.getUser(id);
    return fillDTO(UserRDO, existUser.toPOJO());
  }
}
