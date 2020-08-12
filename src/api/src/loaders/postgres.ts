import client from '../config/postgres';

export default async (): Promise<void> => {
    try {
        await client.connect();
    } catch (err) {
        console.log(err);
    }
};
