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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const utils_service_1 = require("../../../common/utils.service");
const PrismaService_1 = require("../../../database/PrismaService");
const dto_1 = require("../dto");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        return await this.prismaService.user.findMany({
            select: {
                id: true,
                name: true,
                createdAt: true,
                email: true,
                password: false,
                updatedAt: true,
            },
        });
    }
    async findOne(id) {
        return await this.prismaService.user.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                createdAt: true,
                email: true,
                password: false,
                updatedAt: true,
            },
        });
    }
    async findOneByEmail(email) {
        return await this.prismaService.user.findFirst({
            where: {
                email,
            },
        });
    }
    async create(user) {
        const userAlreadyExists = await this.prismaService.user.findFirst({
            where: {
                email: user.email,
            },
        });
        if (userAlreadyExists) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        user.password = utils_service_1.UtilsService.generateHash(user.password);
        return await this.prismaService.user.create({
            data: user,
            select: {
                id: true,
                name: true,
                createdAt: true,
                email: true,
                password: false,
                updatedAt: true,
            },
        });
    }
    async update(id, user) {
        return await this.prismaService.user.update({
            where: {
                id,
            },
            data: new dto_1.UserDTO(user),
            select: {
                id: true,
                name: true,
                createdAt: true,
                email: true,
                password: false,
                updatedAt: true,
            },
        });
    }
    async delete(id) {
        return await this.prismaService.user.delete({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                createdAt: true,
                email: true,
                password: false,
                updatedAt: true,
            },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map