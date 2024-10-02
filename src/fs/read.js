import path from "path";
import {constants, promises as fs} from 'fs';

const read = async () => {
    try {
        const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
        await fs.access(filePath, constants.R_OK);
        const content = await fs.readFile(filePath, 'utf8');

        console.log(content);

    } catch (error) {
        console.error('FS operation failed');
    }
};

await read();