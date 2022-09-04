import { IAuth } from '../dto/IAuth';
import { AuthService } from '../services';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: IAuth): Promise<{
        access_token: string;
    }>;
}
