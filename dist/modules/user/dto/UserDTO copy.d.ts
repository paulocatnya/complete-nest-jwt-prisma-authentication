export declare class UserDTO {
    id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    name?: string | null;
    password?: string;
    constructor(user: UserDTO);
}
