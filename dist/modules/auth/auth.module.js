"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const services_1 = require("./services");
const user_module_1 = require("../user/user.module");
const services_2 = require("../user/services");
const PrismaService_1 = require("../../database/PrismaService");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const config_1 = require("@nestjs/config");
const controllers_1 = require("./controllers");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        secret: configService.get('JWT_KEY'),
                        signOptions: { expiresIn: '3600s' },
                    };
                },
                inject: [config_1.ConfigService]
            })
        ],
        providers: [services_1.AuthService, services_2.UsersService, PrismaService_1.PrismaService, jwt_strategy_1.JwtStrategy],
        exports: [services_1.AuthService],
        controllers: [controllers_1.AuthController]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map