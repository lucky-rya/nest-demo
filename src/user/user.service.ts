import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}
 async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    return await this.user.save(user)
    // return createUserDto;
    // return 'This action adds a new user';
  }

  async findAll(query:{page:number;size:number}) {
    const { page, size } = query;
    const [users,total] =await this.user.findAndCount({
      skip:(page-1)*size,
      take:size,
    })
    return {users,total}
    //  return `This action returns all user`;
  }

 async  findOne(id: number) {
    return await this.user.findOne({where:{id}})
    // return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.user.update(id,updateUserDto)
    // return `This action updates a #${id} user`;
  }

 async remove(id: number) {
  return await this.user.delete(id)
    // return `This action removes a #${id} user`;
  }
}
