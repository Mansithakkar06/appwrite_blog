import { Client, Account, Databases, Storage} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('69048c6c00370bd2dc8c');

export const account = new Account(client);
export const database=new Databases(client)
export const storage=new Storage(client)
export { ID } from 'appwrite';
