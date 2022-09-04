"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../user/services");
const jwt_1 = require("@nestjs/jwt");
const utils_service_1 = require("../../../common/utils.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findOne(email);
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(dto) {
        const usuarioEncontrado = await this.usersService.findOneByEmail(dto.email);
        if (!usuarioEncontrado || !usuarioEncontrado.password) {
            throw new common_1.UnauthorizedException('Credenciais indefinidas');
        }
        const isPasswordValid = await utils_service_1.UtilsService.validateHash(dto.password, usuarioEncontrado.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Credenciais indefinidas');
        }
        const access_token = this.jwtService.sign({
            id: usuarioEncontrado.id,
            name: usuarioEncontrado.name,
            email: usuarioEncontrado.email,
        });
        return { access_token };
    }
    decode(token) {
        token = token.replace('Bearer ', '');
        return this.jwtService.decode(token);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map