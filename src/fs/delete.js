import path from "path";
import {promises as fs} from "fs";

const remove = async () => {
    const remove_filePath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt')
    try {
        await fs.access(remove_filePath)
        await fs.unlink(remove_filePath)
    } catch (error) {
        console.error('FS operation failed');
    }

};

await remove();