import { Request, Response } from "express";
import { fetchAllUsers, updateUser } from "../repository/userCollection";

export const fetchUserData = async (req: Request, res: Response) => {
    try {
        const users = await fetchAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
    }
};

export const updateUserData = async (req: Request, res: Response) => {
    try {
        const { id, data } = req.body;
        if (!id || !data) {
            return res.status(400).json({ error: "Invalid request payload" });
        }

        await updateUser(id, data);
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
    }
};
