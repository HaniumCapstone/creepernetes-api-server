import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  join(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  login() {
    return 'login service'
  }

  logout() {
    return 'logout service'
  }

  profile(uid: number) {
    return uid
  }

  createMBTI(uid: number) {
    return uid
  }

  updateMBTI(uid: number) {
    return uid
  }

}
