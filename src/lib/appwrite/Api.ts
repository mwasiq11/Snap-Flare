import { account, appwriteConfig, databases } from "./Config";
import type { INewUser } from "../../types";
import { ID } from "appwrite";
import { avatars } from "./Config";


export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.name,
            user.email,
            user.password,
        );
        if (!newAccount) throw new Error("Failed to create account");
        const avatarUrl = avatars.getInitials(user.name);
        // ckeck later//
        await saveUserTODB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            avatarUrl: avatarUrl,
        });


        return newAccount;

    } catch (error) {
        console.log("error");
        return error
    }

}
export async function saveUserTODB(user: {
    accountId: string;
    name: string;
    username?: string;
    email: string;
    avatarUrl: string;

}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )
        return newUser;

    } catch (error) {
        console.log("error ");
        return error;

    }

}