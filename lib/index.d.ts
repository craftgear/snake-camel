declare type AnyObject = {
    [key: string]: any;
};
export declare const camel: (str: string) => string;
export declare const snake: (str: string) => string;
export declare const toSnake: (data: AnyObject) => object;
export declare const toCamel: (data: AnyObject) => object;
export {};
