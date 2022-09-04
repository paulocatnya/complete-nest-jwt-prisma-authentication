export declare class UtilsService {
    static generateHash(vlString: string | undefined): string;
    static validateHash(vlString: string, vlHash: string): Promise<boolean>;
}
