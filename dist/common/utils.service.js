"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
class UtilsService {
    static generateHash(vlString) {
        if (!vlString)
            throw new common_1.HttpException('Não é possivel encriptar um valor vazio! ', common_1.HttpStatus.BAD_REQUEST);
        return bcrypt.hashSync(vlString, 10);
    }
    static validateHash(vlString, vlHash) {
        return bcrypt.compare(vlString, vlHash || '');
    }
}
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map