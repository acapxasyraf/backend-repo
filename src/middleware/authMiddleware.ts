import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token || token !== "VALID_TOKEN") {
        return res.status(403).json({ error: "Unauthorized access" });
    }

    next();
};
