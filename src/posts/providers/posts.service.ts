import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    const user = this.usersService.findOne(userId);

    return [
      { userName: user.name, title: 'Posts name', content: 'Post 1' },
      { title: 'Posts name', content: 'Post 2' },
    ];
  }
}
