import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const fetchAllUsers = async (): Promise<User[]> => {
    const snapshot = await db.collection(USERS_COLLECTION).get();
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as User[];
};

export const updateUser = async (id: string, data: Partial<User>): Promise<void> => {
    await db.collection(USERS_COLLECTION).doc(id).set(data, { merge: true });
};
