import path from 'path';
import {promises as fs} from "fs";


const create = async () => {
    const filePath = path.join(import.meta.dirname, "files", "fresh.txt");
    try {
        await fs.access(filePath);
        console.error('FS operation failed');
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.writeFile(filePath, 'I am fresh and young');
        } else console.error('FS operation failed');

    }
};

await create();