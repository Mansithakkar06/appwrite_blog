import { database, ID, storage } from "./config"
import config from "./envconfig"

export const createPost=async(title,slug,description,status,image,userid,username)=>{
    const post=await database.createDocument({
        databaseId:config.appwriteDatabaseId,
        collectionId:config.appwriteCollectionId,
        documentId:ID.unique(),
        data:{
            title:title,
            slug:slug,
            description:description,
            status:status,
            image:image,
            userid:userid,
            username:username
        }
    })
    return post
}

export const getDocument=async(id)=>{
    const post=await database.getDocument({
        databaseId:config.appwriteDatabaseId,
        collectionId:config.appwriteCollectionId,
        documentId:id,
    })
    return post;
}
export const createFile=async(image)=>{
    const file=await storage.createFile({
        bucketId:config.appwriteBucketId,
        fileId:ID.unique(),
        file:image,
    })
    return file
}

export const getFileview=(id)=>{
    try {
        const file=storage.getFileView({
        bucketId:config.appwriteBucketId,
        fileId:id,
    })
    return file;
    } catch (error) {
        console.log("error in get image",error)
    }
   
}
