import { account, appwriteConfig, databases } from "./Config";
import type { INewUser } from "../../types";
import { ID } from "appwrite";
import { avatars } from "./Config";
import { Query } from "appwrite";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),        // correct userId
            user.email,         // ✅ correct email
            user.password,      // ✅ correct password
            user.name           // ✅ correct name (optional)
        );

        if (!newAccount) throw new Error("Failed to create account");

        const avatarUrl = avatars.getInitials(user.name);

        await saveUserTODB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            avatarUrl: avatarUrl,
        });

        return newAccount;

    } catch (error) {
        console.log("Account creation error:", error);
        return error;
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

export async function signInAccount(user: { email: string; password: string }) {
    try {
        const session = await account.createSession(user.email, user.password);
        return session;
    } catch (error) {
        console.log(error);
        
        
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error
        
        const currentUser=await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
           [ Query.equal("accountId", currentAccount.$id)]
        )
        if(!currentUser)throw Error
        return currentUser.documents[0]


    } catch (error) {
        console.log(error);
        
    }
}
