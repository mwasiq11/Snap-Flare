import {Client,Databases, Storage, Account,Avatars} from 'appwrite';

export const appwriteConfig={
    projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    endPoint:import.meta.env.VITE_APPWRITE_ENDPOINT,
    databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId:import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId:import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    savesCollectionId:import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    postsCollectionId:import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
}

 export const client=new Client()
 client.setProject(appwriteConfig.projectId)
 client.setEndpoint(appwriteConfig.endPoint)
 export const databases=new Databases(client)
 export const storage=new Storage(client)
 export const account=new Account(client)
 export const avatars=new Avatars(client)
