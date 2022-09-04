import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from '../dto';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<UserDTO[]>;
    findOne(id: string): Promise<UserDTO | null>;
    findOneByEmail(email: string): Promise<UserDTO>;
    create(user: UserDTO): Promise<UserDTO>;
    update(id: string, user: UserDTO): Promise<UserDTO>;
    delete(id: string): Promise<UserDTO>;
}
