export declare class UserWithoutPasswordDTO {
    id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    name?: string | null;
    password?: string;
    constructor(user: UserWithoutPasswordDTO);
}
