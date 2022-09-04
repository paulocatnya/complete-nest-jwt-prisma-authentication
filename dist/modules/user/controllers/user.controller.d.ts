import { UserDTO } from '../dto';
import { UsersService } from '../services/user.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<UserDTO[]>;
    findOne(id: string): Promise<UserDTO | null>;
    update(id: string, user: UserDTO): Promise<UserDTO | null>;
    create(user: UserDTO): Promise<UserDTO>;
    delete(id: string): Promise<UserDTO>;
}
