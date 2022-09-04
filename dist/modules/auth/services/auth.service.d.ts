import { UsersService } from '../../user/services';
import { JwtService } from '@nestjs/jwt';
interface TokenDecodeDto {
    id: string;
    name: string;
    email: string;
    iat: number;
    exp: number;
}
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    decode(token: string): TokenDecodeDto;
}
export {};
