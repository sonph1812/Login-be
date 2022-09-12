import { NextFunction, Request, Response } from "express";
declare class ProductController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
