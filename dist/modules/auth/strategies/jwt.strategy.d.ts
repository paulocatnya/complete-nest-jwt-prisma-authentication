import { Strategy } from 'passport-jwt';
interface payloadLoggin {
    id: string;
    name: string;
    email: string;
    iat: number;
    exp: number;
}
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: payloadLoggin): Promise<{
        sub: string;
        name: string;
        email: string;
    }>;
}
export {};
