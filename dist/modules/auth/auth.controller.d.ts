import { AuthService } from './auth.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AuthService);
    getHello(): string;
}
