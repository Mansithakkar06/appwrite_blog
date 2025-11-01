import { database, ID, storage } from "./config"
import config from "./envconfig"

export const createPost=async(title,slug,description,status,image,user)=>{
    const post=await database.createDocument({
        databaseId:config.appwriteDatabaseId,
        collectionId:config.appwriteCollectionId,
        documentId:slug,
        data:{
            title:title,
            slug:slug,
            description:description,
            status:status,
            image:image,
            user:user
        }
    })
    return post
}

export const createFile=async(image)=>{
    const file=await storage.createFile({
        bucketId:config.appwriteBucketId,
        fileId:ID.unique(),
        file:image,
    })
    return file
}

export const getFile=async(image)=>{
    const file=await storage.getFile({
        bucketId:config.appwriteBucketId,
        fileId:image,
    })
    return file;
}
