import { Client, Account, Databases, Storage} from 'appwrite';
import config from './envconfig';

export const client = new Client();

client
    .setEndpoint(config.appwriteEndPoint)
    .setProject(config.appwriteProjectId);

export const account = new Account(client);
export const database=new Databases(client)
export const storage=new Storage(client)
export { ID } from 'appwrite';
